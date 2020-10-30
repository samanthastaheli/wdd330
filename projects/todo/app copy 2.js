// seletors
document.querySelector('form').addEventListener('submit', handleSumbitForm);
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
}

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