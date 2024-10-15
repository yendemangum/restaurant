const content2 = document.createElement("div")
content2.setAttribute("class", "content")


const menu = document.createElement("ul")

const item1 = document.createElement("li")
const item2 = document.createElement("li")
const item3 = document.createElement("li")
const item4 = document.createElement("li")

item1.setAttribute("class", "menuitem")
item2.setAttribute("class", "menuitem")
item3.setAttribute("class", "menuitem")
item4.setAttribute("class", "menuitem")

item1.textContent = "mashed sweet potatoes"
item2.textContent = "cauliflower steak"
item3.textContent = "cornbread"
item4.textContent = "grilled asparagus"

menu.append(item1, item2, item3, item4)
content2.appendChild(menu)

export { content2 }