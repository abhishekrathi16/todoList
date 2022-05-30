const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')

document.addEventListener('DOMContentLoaded', getTodos)
todoButton.addEventListener("click", addTodo)
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('click', filterTodo)

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
    //add todo to local storage
    saveLocalTodos(todoInput.value)
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

function deleteCheck(e) {
    const item = e.target
    //delete
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement
        todo.classList.add("fall")
        removeLocalTodos(todo)
        todo.addEventListener('transitionend', function () {
            todo.remove()
        })
    }

    //check
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement
        todo.classList.toggle("completed")
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case 'all':
                todo.style.display = 'flex'
                break
            case 'completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex'
                }
                else {
                    todo.style.display = 'none'
                }
                break
            case 'uncompleted':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'none'
                }
                else {
                    todo.style.display = 'flex'
                }
                break
        }
    })
}

function saveLocalTodos(todo) {
    //check for already existing local list
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo) 
    localStorage.setItem('todos', JSON.stringify(todos))
}

function getTodos() {
    let todos
    // console.log("hello")
    //check for already existing local list
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.forEach(function (todo) {
        //todo div
        const todoDiv = document.createElement('div')
        todoDiv.classList.add("todo")
        //create li
        const newTodo = document.createElement('li')
        newTodo.innerText = todo
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
    })
}

function removeLocalTodos(todo) {
    let todos
    // console.log("hello")
    //check for already existing local list
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    // console.log(todo.children)
    const todoIndex=todo.children[0].innerText
    todos.splice(todos.indexOf(todoIndex),1)
    localStorage.setItem('todos',JSON.stringify(todos))
}