import {getFromLS, saveToLS} from "./utilities.js"; 
let todos = [];

class Todo {
    constructor(key) {
        this.key = key; // this.key is property key is var 
        this.init();
    }
    init() { // initiate 
        if(getFromLS(this.key) != null) {
            todos = getFromLS(this.key);
        }
        document.querySelector('form').addEventListener('submit', this.handleSumbitForm.bind(this)); // bind(this) tells to not reasign 
        document.querySelector('ul').addEventListener('click', this.checkTodo);
        document.getElementById('clearAll').addEventListener('click', this.handleClearAll);
        document.getElementById('completedButton').addEventListener('click', this.filterCompleted.bind(this));
        document.getElementById('activeButton').addEventListener('click', this.filterActive.bind(this));
        document.getElementById('allButton').addEventListener('click', this.displayAll.bind(this));
        this.displayTodos(todos);
    }
    handleSumbitForm(e) {
        e.preventDefault();
        let input = document.querySelector('input');
        if (input.value != '')
            this.addNewTodo(input.value);
            input.value = '';
    }
    addNewTodo(text) {
        const newTodo = {
            id: new Date(),
            text: text,
            completed: false 
        };
        todos.push(newTodo); // push or add to todos array
        saveTodos(this.key, todos);
        this.createTodo(newTodo);
    }
    checkTodo(e) {
        if(e.target.name == 'checkButton') {
            let item = e.target.parentNode;
            let clickedTodo = findTodo(e.target.dataset.id); 
            if(item.style.textDecoration == 'line-through') {
                item.style.textDecoration = 'none'; 
                clickedTodo.completed = false;
            }
            else {
                item.style.textDecoration = 'line-through';
                clickedTodo.completed = true;
            }    
        }
        if(e.target.name == 'deleteButton') {
            let item = e.target.parentNode;
                item.addEventListener('transitionend', function() {
                    item.remove();
            })
            item.classList.add('todo-list-item-fall');
        } 
    }
    handleClearAll() {
        document.querySelector('ul').innerHTML = ''; // set ul to empty string 
    }
    createTodo(todo) {
        let ul = document.querySelector('ul'); // select ul and li make into variables
        let li = document.createElement('li');  
        // create li element
        li.innerHTML = `
            <span class="todo-item">${todo.text}</span>
            <button name="checkButton" data-id="${todo.id}"><i class="fas fa-check-square"></i></button>
            <button name="deleteButton"><i class="fas fa-trash"></i></button>
        `;
        li.classList.add('todo-list-item');
        ul.appendChild(li); // li needs to be child of ul 
    }
    displayTodos(todos) {
        if(todos != null){
            todos.forEach((todo) => { // sends to create todo one at a time 
                this.createTodo(todo) 
            })
        }
    }
    filterCompleted() {
        let completedTodos = [];
        todos.forEach(todo => {
            if(todo.completed == true) {
                completedTodos.push(todo);
            }
        }) 
        this.handleClearAll();
        this.displayTodos(completedTodos);
    }
    filterActive() {
        let activeTodos = [];
        todos.forEach(todo => {
            if(todo.completed == false) {
                activeTodos.push(todo);
            }
        }) 
        this.handleClearAll();
        this.displayTodos(activeTodos);
    }
    displayAll() {
        this.handleClearAll();
        this.displayTodos(todos);
    }
}

function saveTodos(key, todo) {
    saveToLS(key, todo); 
}

function findTodo(id) { // finish   
    document.getElementsByName('checkButton');
    return todos.find(todo => {
        return todo.id === id;
    }) 
    // go through array 
    // aray method   filter   indexOf   find() better    
}

export default Todo;