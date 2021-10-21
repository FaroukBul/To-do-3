import todoDB from "./db.js";
import {createRow} from "./db.js"

class ToDos {

    constructor(db){
        this.db = db
        this.cardsContainer = document.getElementsByClassName("cards-container")[0]

    }

    createTodoCards(){
        console.log("this")
        let id = 0
        console.log(this.db, "db")
        this.db.todo.each(todo => {
            let card = this.generateCard(todo.id)
            card.innerHTML = todo.description
            this.cardsContainer.appendChild(card)
            id++
            console.log(todo.description)
        })
    }

    generateCard(id){
        let card = document.createElement("div")
        card.setAttribute("id", id)
        card.classList.add("todo-card")
        return card

    }

    getTodos(){
        let todos = []
        this.db.todo.each(todo => {
            todos.push(todo.description)
        })

        return todos
    }
}

export default ToDos
