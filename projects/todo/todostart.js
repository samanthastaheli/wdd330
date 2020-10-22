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