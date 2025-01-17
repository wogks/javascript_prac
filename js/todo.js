const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInPut = document.querySelector("#todo-form input");

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInPut.value;
    toDoInPut.value = "";
}

toDoForm.addEventListener("submit", handleTodoSubmit);