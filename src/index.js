import "./style.css"



import { content1 } from "./homepage.js"

import { content2 } from "./menu.js"

import { content3 } from "./about.js"

const content = document.querySelector("#content")

const selectButton = document.querySelector(".dropdown")

const homeButton = document.querySelector(".home")

const menuButton = document.querySelector(".menu")

const aboutButton = document.querySelector(".about")


content.appendChild(content1);

homeButton.addEventListener("click", () => {
    while (content.firstChild) {
    content.removeChild(content.lastChild)
} 
    content.appendChild(content1)
})

menuButton.addEventListener("click", () => {
    while (content.firstChild) {
        content.removeChild(content.lastChild)
    } 
    content.appendChild(content2)
})

aboutButton.addEventListener("click", () => {
    while (content.firstChild) {
        content.removeChild(content.lastChild)
    } 
    content.appendChild(content3)
})

selectButton.addEventListener("click", () => {
    homeButton.classList.toggle("visible")
    menuButton.classList.toggle("visible")
    aboutButton.classList.toggle("visible")
    

})