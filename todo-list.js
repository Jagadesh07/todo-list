let todoList = [
    {
        task:'personal'
    }
];
    let inputTask= document.querySelector('.js-todoInput');
    let enterBtn = document.querySelector('.js-enterBtn');
    enterBtn.addEventListener('click', () =>{
        getInput();
    })
   
function getInput(){
    let task = inputTask.value;
    todoList.push({task});
    inputTask.value = '';
    renderTodo();
}
function renderTodo(){
    let pageHTML = '';

    todoList.forEach(function(value){
       let todoObject = value;
        const {task} = todoObject;
        const html  = `<div class="list-item">
                <p class="js-task">${task}</p>
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

// 
// let list = [];

//     let inputElement = document.querySelector('.js-input');
//     let dateInput = document.querySelector(".js-date");
//     let timeInput = document.querySelector('.js-time');
// document.querySelector('.js-add-todo-button').addEventListener('click', () => {
//     getInput();
// });

// timeInput.addEventListener('keydown',(event) => {
//     if(event.key === 'Enter'){
//         getInput();
//     }
// })
// function renderTodo(){
//     let pageHTML = '';
    
//     list.forEach(function(value){
//         todoObject = value;
//     const {name} = todoObject;
//     const {dueDate} = todoObject;
//     const {time} = todoObject;
//     const html = `<div>${name} - ${dueDate} - ${time}
//     <button class="js-delete-todo-button">
//     delete
//     </button></div>`;
//     pageHTML += html;
//     });
// document.querySelector('.js-display').innerHTML = pageHTML;

//     document.querySelectorAll('.js-delete-todo-button')
//     .forEach((deleteButton,index) => {
//        deleteButton.addEventListener('click', () => {
//            list.splice(index,1);
//          renderTodo();
//        })
//     });
// }
// function getInput(){
//     let name = inputElement.value;
//     let dueDate = dateInput.value;
//     let time = timeInput.value;
//     list.push({name
//         ,dueDate,time});
//     inputElement.value = '';
//     dateInput.value = '';
//     timeInput.value = '';
//     renderTodo();
// }

// 