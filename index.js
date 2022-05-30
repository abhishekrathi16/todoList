const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")
const filterOption = document.querySelector(".filter-todo")

// add todo, delete todo, get Todos, filter todo
document.addEventListener("DOMContentLoaded",getTodos)
todoButton.addEventListener("click",addTodo)
todoList.addEventListener("click",deleteCheck)
filterOption.addEventListener("click", filterTodo)

function addTodo(event) {
    // console.log('hello')
    event.preventDefault() //to prevent from submitting
    //todo div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add("todo")
    //create li
    const newTodo = document.createElement('li')
    newTodo.innerHTML = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    //check button
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("complete-btn")
    todoDiv.appendChild(completedButton)
    //delete button
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn")
    todoDiv.appendChild(trashButton)

    //append to list
    todoList.appendChild(todoDiv)

    todoInput.value = ''
}

function deleteCheck(){}

function getTodos(){}

function filterTodo(){}