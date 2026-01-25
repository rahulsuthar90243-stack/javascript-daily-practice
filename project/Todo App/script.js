let todoList = [
    {
     item: "Buy Milk", 
     dueDate: "24/01/2026",
    },
    {
     date: "Go to College",
     dueDate: "24/01/2026"
    }
];
displayItems();

addTodo();
function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let buttonElement = document.querySelector('#add-btn');
    let dateElement = document.querySelector('#todo-date');
    buttonElement.addEventListener("click", () => {
        let todoItem = inputElement.value;
        let todoDate = dateElement.value;
        todoList.push({item: todoItem, dueDate: todoDate});
        inputElement.value = "";
        dateElement.value = "";
    displayItems();
    });
}


function displayItems(){
    let containerElement = document.querySelector('#todo-container');
   
    let newHtml = '';
    for(let i =0; i < todoList.length; i++){
        let item = todoList[i].item;
        let dueDate = todoList[i].dueDate;
        newHtml += `<div>
                        <span>${item}</span>
                        <span>${dueDate}</span>
                       <button id="todo-delet" onclick="deleteTodo(${i})">Delete</button>
                        </div>`;
    }
    containerElement.innerHTML = newHtml;
}
function deleteTodo(index){
    todoList.splice(index, 1);
    displayItems();
}