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
    renderTodo();
}

function checkBox(){
   

    document.querySelectorAll('.js-checkBox').forEach((checkBox) => {
        checkBox.addEventListener('change', () => {
            const index = checkBox.getAttribute('data-index');
            todoList[index].completed = checkBox.checked;
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
    });
     document.querySelector('.list-section').innerHTML = pageHTML;

 document.querySelectorAll('.js-deleteBtn').forEach((deleteBtn,index) => {
        deleteBtn.addEventListener('click', () => {
            todoList.splice(index,1);
            renderTodo();
        })
    })
    checkBox();
}