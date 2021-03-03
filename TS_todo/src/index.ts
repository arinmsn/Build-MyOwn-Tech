import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos: TodoItem[] = [
    new TodoItem(1, "Buy printer copy paper"), new TodoItem(2, "Buy toothpaste"),
    new TodoItem(3, "Buy Hockey season tickets"), new TodoItem(4, "Make dentist appointment", true)
];

let collection: TodoCollection = new TodoCollection("Edmond", todos);

console.clear();
console.log(`${collection.userName}'s Todo List: `);

let newId: number = collection.addTodo("Go cycling");
let todoItem: TodoItem = collection.getTodoById(newId);
console.log(JSON.stringify(todoItem));
todoItem.printDetails();

// collection.addTodo(todoItem);
