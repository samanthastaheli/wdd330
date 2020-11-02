// import { qs, saveToLS } from "./utilities.js";
const todos = [];
function qs(selector){
    return document.querySelector(selector);
  } 
  // qs("main").innerHTML = "Task Added!";
// saveToLS(key, data){
//     localStorage.setItem(key, JSON.stringify(data));
// }
// function saveTodos(key){
//     saveToLS(key, todos);
// }
// function getInput() {
//     text = document.getElementsByName('todoInput');
// }
// function createTodo(parentId, key) {
//         this.listElement = qs(parentId); // selects ul 
//         this.key = key; // idk what this does
//         return todos; // idk what this does either 
//     }
const date = new Date();
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const input = document.getElementsByName('todoInput'); // returns NodeList(1)
const todoListElement = document.getElementById('todoList');
const addButton = document.getElementById('addButton');

const liMaker = (text) => {
    const li = document.createElement('li')
    li.textContent = text
    ul.appendChild(li)
}


/*
// create list item
function showTodoItem() {
    todoListElement.innerHTML = "";
    createTodoItem(text);
}
function renderTodoItem() {
    todoListElement.appendChild(createTodoItem(text));
}
function createTodoItem(text) {
    const item = document.createElement('li');
    item.innerHTML = `<li>${text}</li>`;
    return item;
}
addButton.addEventListener('click', createTodoItem)
// function saveTodos() {
//     //todos.push(newTodo); 
//     let storage = localStorage.setItem("#todoList", "newTodo");
//     return storage;
// }
   
// saveTodos(this.key);

// const myTodo = new Todo("#todoList", "todos"); */



// app js changed
// seletors
document.querySelector('form').addEventListener('submit', handleSumbitForm);
document.querySelector('ul').addEventListener('click', handleDeleteOrCheck);
document.getElementById('clearAll').addEventListener('click', handleClearAll);
//document.getElementById('allButton'),addEventListener('click', handleAll);
// document.getElementById('activeButton'),addEventListener('click', handleActive);
// document.getElementById('completedButton'),addEventListener('click', handleCompleted);

// buttons as variables
// const allButton = document.getElementById('allButton');
// const activeButton = document.getElementById('activeButton');
// const completedButton = document.getElementById('completedButton');


// event handler function
function handleSumbitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '')
        addTodo(input.value);
        input.value = '';
}

function handleDeleteOrCheck(e) {
    if(e.target.name == 'checkButton')
        checkTodo(e);

    if(e.target.name == 'deleteButton')
        deleteTodo(e);
}

function handleClearAll(e) {
    document.querySelector('ul').innerHTML = ''; // set ul to empty string 
}

// function handleActive(e) { if ()
//     // document.getElementsByClassName('completedTodo').style.display = 'none';
//     document.getElementById('activeButton').style.backgroundColor = 'white';
//     document.getElementById('allButton').style.backgroundColor = 'lightgray';
//     document.getElementById('completedButton').style.backgroundColor = 'lightgray';

//     let item = e.target.parentNode;
//     if(item.style.textDecoration == 'line-through')
//         item.style.display = 'none';
// }

// function handleCompleted(e) {
//     // document.getElementsByClassName('completedTodo').style.display = 'none';
//     document.getElementById('completedButton').style.backgroundColor = 'white';
//     document.getElementById('activeButton').style.backgroundColor = 'lightgray';
//     document.getElementById('allButton').style.backgroundColor = 'lightgray';
// }

// helper functions
function addTodo(todo) {
    let ul = document.querySelector('ul'); // select ul and li make into variables
    let li = document.createElement('li'); 

    // create li element
    li.innerHTML = `
        <span class="todo-item">${todo}</span>
        <button name="checkButton"><i class="fas fa-check-square"></i></button>
        <button name="deleteButton"><i class="fas fa-trash"></i></button>
    `;
    li.classList.add('todo-list-item');
    ul.appendChild(li); // li needs to be child of ul 
}

function checkTodo(e) {
    let item = e.target.parentNode;
    if(item.style.textDecoration == 'line-through')
        item.style.textDecoration = 'none'; 
    else 
        item.style.textDecoration = 'line-through'; 
}

// function addClass() {
//     let li = document.querySelector('li');
//     if(item.style.textDecoration == 'line-through')
//         li.classList.add('completedTodo'); // adds class to li
// }

function deleteTodo(e) {
    let item = e.target.parentNode;
    item.addEventListener('transitionend', function() {
        item.remove();
    })
    item.classList.add('todo-list-item-fall');
}

// function showActive(e) {
//     let item = e.document.getElementsByTagName('li');
//     if(item.classList = 'completedTodo')
//         item.style.display = 'none';
        
// }

// <i class="fas fa-check-square"></i>