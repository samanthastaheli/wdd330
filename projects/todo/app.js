// seletors
document.querySelector('form').addEventListener('submit', handleSumbitForm);

// event handler function
function handleSumbitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '')
        addTodo(input.value);
        input.value = '';
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

    li.classList.add('todo-list-item'); // adds class to li
    ul.appendChild(li); // li needs to be child of ul 
}