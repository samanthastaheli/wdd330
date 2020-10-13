        import { qs, getFromLS } from "./utilities.js";
        import Todo from './main.js';

        qs("main").innerHTML = "It worked!";

        const myTodo = new Todo("#todoList", 'todos');