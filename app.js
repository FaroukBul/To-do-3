import todoDB from "./db.js";
import {createRow} from "./db.js"
import ToDos from "./todo.js"

let db = todoDB({todo: "++id, description"})
let submit = document.getElementById("submit")


submit.onclick = (event) => {
    let text = document.getElementById("text").value
    let flag = createRow(db.todo, {description: text})
    console.log(db)
    let todos = new ToDos(db)
    todos.createTodoCards()

    

}