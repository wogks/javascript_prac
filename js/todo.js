const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInPut = document.querySelector("#todo-form input");

const toDos = [];

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();

}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span")
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);

}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInPut.value;
    toDoInPut.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveTodos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

function he(item) {

}

const savedTodos = localStorage.getItem("todos");
console.log(savedTodos);

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    console.log(parsedTodos);
    parsedTodos.forEach(he);
}