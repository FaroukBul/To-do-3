import todoDB from "./db.js";
import {createRow} from "./db.js"

let db = todoDB({todo: "++id, description"})
let card = document.createElement("div")
let cardsContainer = document.getElementsByClassName("cards-container")[0]
let submit = document.getElementById("submit")
let descriptions = []
submit.onclick = (event) => {
    let text = document.getElementById("text").value
    let flag = createRow(db.todo, {description: text})
    text = ""
    db.todo.each(description => {
        let desc = description.description
        descriptions.push(desc)
        let card = document.createElement("div")
        card.innerHTML = desc
        cardsContainer.appendChild(card)
    })

}