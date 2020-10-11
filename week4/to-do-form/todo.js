        import { qs, getFromLS } from "./utilities.js";
        import Todo from './todo.js';

        qs("main").innerHTML = "It worked!";

        const myTodo = new Todo("#todoList", 'todos');