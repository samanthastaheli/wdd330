// seletors
document.querySelector('form').addEventListener('submit', handleSumbitForm);
document.querySelector('ul').addEventListener('click', handleDeleteOrCheck);
document.getElementById('clearAll').addEventListener('click', handleClearAll);

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