import {getFromLS, saveToLS} from "./utilities.js"; 
let todos = [];

class Todo {
    constructor(key) {
        this.key = key; // this.key is property key is var 
        this.init();
    }
    init() {
        todos = getFromLS(this.key);
        document.querySelector('form').addEventListener('submit', this.handleSumbitForm.bind(this)); // bind(this) tells to not reasign 
        document.querySelector('ul').addEventListener('click', this.checkTodo);
        document.getElementById('clearAll').addEventListener('click', this.handleClearAll);
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
            let clickedTodo = findTodo(e.target.dataset.id); // !!!!! clickedTodo is always undefined 
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
    handleClearAll(e) {
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
        todos.forEach((todo) => { // sends to create todo one at a time 
            this.createTodo(todo) 
        })
    }
}

function saveTodos(key, todo) {
    saveToLS(key, todo); 
}

function findTodo(id) { // finish   
    document.getElementsByName('checkButton');
    todos[id];
    // go through array 
    // for(let i = 0; i > todos.length; i++) {
    //      todos[i];
    // }
    // aray method   filter   indexOf   find() better    

}

// document.getElementById('completedButton').addEventListener('click', this.filterTodos);


export default Todo;




// OLD CODE 
// seletors
/* document.querySelector('form').addEventListener('submit', handleSumbitForm);
document.querySelector('ul').addEventListener('click', handleDeleteOrCheck);
document.getElementById('clearAll').addEventListener('click', handleClearAll);
// document.getElementById('activeButton').addEventListener('click', filter);

// event handler function
function handleSumbitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    localStorage.setItem('input', JSON.stringify(input.value));
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

// function filter(e) {
//     if(e.target.name == 'activeButton')
//         filterActive(e);
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

function deleteTodo(e) {
    let item = e.target.parentNode;
    item.addEventListener('transitionend', function() {
        item.remove();
    })
    item.classList.add('todo-list-item-fall');
} */

// function filterActive() {
//     let item = e.target.parentNode;
//     if(item.style.textDecoration == 'line-through')
//         display = 'none';   
// }

/* filter functions */

// function filterActive() {
//     // let active = todo-list-item.style.textDecoration == 'none';
//     let completed = todo-list-item.style.textDecoration == 'line-through';
//     if(completed)
//         display = 'none'
//     else 
//         display = 'list-item'
// }

// let liNodes = document.querySelectorAll('li');
// let liArray = Array.from('liNodes');
// let activeFilter = liArray.filter('liArray');