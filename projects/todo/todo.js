// import { qs, saveToLS } from "./utilities.js";
const todos = [];
function saveToLS(key, data){
    localStorage.setItem(key, JSON.stringify(data));
}
function saveTodos(key){
    saveToLS(key, todos);
}
function qs(selector){
    return document.querySelector(selector)
  }
class Todo {
    constructor(parentId, key) {
        this.listElement = qs(parentId);
        this.key = key;
    }
    static addNewTodo(text) {
        const newTodo = {
            id: new Date(),
            text: text,
            completed: false
        };
        todos.push(newTodo);
        saveTodos(this.key);
    }
    completeTodo(todo) {}
    listTodos() {}
}

export default Todo;