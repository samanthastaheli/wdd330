/* Add new task
 remove or delete task
  complete task
   sort tasks
    filter tasks
    complete by date
    
    Retrieve todo's from data store
    Save todo's to data store
    remove todo from data store

    display todo list
        get list element
        retrieve todo's from data store
        for each todo... build out html
        add todo to list */

import { qs } from "./utilities.js";
const todos = [];
function saveTodos(key){
    saveToLS(key, todos);
}
class Todo {
    constructor(parentId, key){
        this.listElement = qs(parentId);
        this.key = key;
     }
     addNewTodo(text){
         const newTodo = {
             id: new Date(), 
             text: text,
             completed: false
         }
         todos.push(newTodo);
         saveTodos(this.key);
     }
     completeTodo(todo){}
     listTodos(){}
    }

export default Todo;

