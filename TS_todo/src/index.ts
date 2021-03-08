import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import * as inquirer from "inquirer";

let todos: TodoItem[] = [
    new TodoItem(1, "Buy printer copy paper"), new TodoItem(2, "Buy toothpaste"),
    new TodoItem(3, "Buy Hockey season tickets"), new TodoItem(4, "Make dentist appointment", true)
];

let collection: TodoCollection = new TodoCollection("Edmond", todos);
let showCompleted = true;

function displayTodoList(): void {
    console.log(`${collection.userName}'s Todo List ` 
    + `(${ collection.getItemCounts().incomplete } items to do)`);

    collection.getTodoItems(showCompleted).forEach(
        item => item.printDetails()
    );
}

enum Commands {
    Toggle = "Show/Hide Completed",
    Quit = "Quit"
}

function promptUser(): void {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands),
    }).then(answers => {
        switch (answers["command"]) {
            case Commands.Toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
        }
    })
}

promptUser();
