let todoList = [];
    let inputTask= document.querySelector('.js-todoInput');
    let dateInput = document.querySelector('.js-dateInput');
    let timeInput = document.querySelector('.js-timeInput');

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
    todoList.push({task,date,time});
    inputTask.value = '';
    dateInput.value = '';
    timeInput.value = '';
    renderTodo();
}
function renderTodo(){
    let pageHTML = '';

    todoList.forEach(function(value){
       let todoObject = value;
        const {task} = todoObject;
        const {date} = todoObject;
        const {time} = todoObject;
        const html  = `<div class="list-item">
                <p class="js-task"><span>${task}</span><span>${date}</span><span>${time}</span></p>
                <button class="js-deleteBtn"><i class="fa-solid fa-trash"></i></button>
            </div>`
            pageHTML += html;
    })
 document.querySelector('.list-section').innerHTML = pageHTML;

 document.querySelectorAll('.js-deleteBtn').forEach((deleteBtn,index) => {
        deleteBtn.addEventListener('click', () => {
            todoList.splice(index,1);
            renderTodo();
        })
    })
}