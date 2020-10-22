import { qs, saveToLS } from "./utilities.js";
const todos = [];
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
    getTodos() {
        return todos;
    }
}

export default Todo;