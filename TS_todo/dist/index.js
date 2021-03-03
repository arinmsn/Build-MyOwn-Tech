"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
let todos = [
    new todoItem_1.TodoItem(1, "Buy printer copy paper"), new todoItem_1.TodoItem(2, "Buy toothpaste"),
    new todoItem_1.TodoItem(3, "Buy Hockey season tickets"), new todoItem_1.TodoItem(4, "Make dentist appointment", true)
];
let collection = new todoCollection_1.TodoCollection("Edmond", todos);
console.clear();
console.log(`${collection.userName}'s Todo List: `);
let newId = collection.addTodo("Go cycling");
let todoItem = collection.getTodoById(newId);
console.log(JSON.stringify(todoItem));
todoItem.printDetails();
// collection.addTodo(todoItem);
