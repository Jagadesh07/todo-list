let todoList = [];
    let inputTask= document.querySelector('.js-todoInput');
    let dateInput = document.querySelector('.js-dateInput');
    let timeInput = document.querySelector('.js-timeInput');
    let checkInput = document.querySelectorAll('.js-checkBox');

    
    document.querySelector('.js-enterBtn').addEventListener('click', () =>{
        if(!inputTask.value){
            alert('please specify a task');
        }
        else if(!dateInput.value){
            alert('please specify a date');
        }
         else if(!timeInput.value){
            alert('please specify a time');
        }
        else{
             getInput();
        }
       
    })
   
function getInput(){
    let task = inputTask.value;
    let date = dateInput.value;
    let time = timeInput.value;
    todoList.push({task,date,time,completed:false});
    inputTask.value = '';
    dateInput.value = '';
    timeInput.value = '';
    saveToLocalStorage();
    renderTodo();
}

function checkBox(){
   

    document.querySelectorAll('.js-checkBox').forEach((checkBox) => {
        checkBox.addEventListener('change', () => {
            const index = checkBox.getAttribute('data-index');
            todoList[index].completed = checkBox.checked;
            saveToLocalStorage();
            const taskItem = checkBox.closest('.js-task');
            if (checkBox.checked) {
                taskItem.classList.add('completed');
            } else {
                taskItem.classList.remove('completed');
            }
        });
    });


}


function renderTodo(){
    let pageHTML = '';

    todoList.forEach((value,index) => {
        const { task, date, time, completed } = value;
        const checked = completed ? 'checked' : '';
        const completedClass = completed ? 'completed' : '';
        const html  = `<div class="list-item">
                <p class="js-task ${completedClass}"><input type="checkbox" class="js-checkBox" data-index = "${index}" ${checked}><span>${task}</span><span>${date}</span><span>${time}</span></p>
                <button class="js-deleteBtn" data-index="${index}"><i class="fa-solid fa-trash"></i></button>
            </div>`
            pageHTML += html;
            saveToLocalStorage();
    });
     document.querySelector('.list-section').innerHTML = pageHTML;

 document.querySelectorAll('.js-deleteBtn').forEach((deleteBtn,index) => {
        deleteBtn.addEventListener('click', () => {
            todoList.splice(index,1);
            saveToLocalStorage();
            renderTodo();
        })
    })
    checkBox();
}

// mode-switching
const darkMode = document.querySelector('.dark');
const lightMode = document.querySelector('.light');
let dark = false;

darkMode.addEventListener('click',() => {
    dark = true;
    darkMode.style.backgroundColor = 'rgb(245, 199, 108)';
    darkMode.style.color = 'black';
    lightMode.style.backgroundColor = 'transparent';
    lightMode.style.color = 'white';
    setMode();

    localStorage.setItem('theme','dark');
})
lightMode.addEventListener('click',() => {
    dark = false;
    lightMode.style.backgroundColor = 'rgb(245, 199, 108)';
    lightMode.style.color = 'black';
    darkMode.style.backgroundColor = 'transparent';
    darkMode.style.color = 'black';
    setMode();

    localStorage.setItem('theme','light');
})


let r = document.querySelector(':root');

function setMode(){
    if(dark){
    r.style.setProperty('--secondary-shade','rgb(36, 36, 36)');
    r.style.setProperty('--text-color','white');
    r.style.setProperty('--main-shade','rgb(29, 27, 27)');
}
else{
    r.style.setProperty('--secondary-shade','rgb(235, 242, 245)');
    r.style.setProperty('--text-color','black');
    r.style.setProperty('--main-shade','white');
}
}

//local-storage

function saveToLocalStorage(){
    localStorage.setItem('todoList',JSON.stringify(todoList));
}

function loadFromLocalStorage(){
    const storedList = localStorage.getItem('todoList');
    if(storedList){
        todoList = JSON.parse(storedList);
        renderTodo();
    }
}
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        dark = savedTheme === 'dark';
        setMode();

        if (dark) {
            darkMode.style.backgroundColor = 'rgb(245, 199, 108)';
            darkMode.style.color = 'black';
            lightMode.style.backgroundColor = 'transparent';
            lightMode.style.color = 'white';
        } else {
            lightMode.style.backgroundColor = 'rgb(245, 199, 108)';
            lightMode.style.color = 'black';
            darkMode.style.backgroundColor = 'transparent';
            darkMode.style.color = 'black';
        }
    }
}
window.addEventListener('DOMContentLoaded',() => {
    loadFromLocalStorage();
    loadTheme();
});