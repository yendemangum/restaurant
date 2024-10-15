import image1 from "./restaurant-clipart.png"

const restaurantClipart = document.createElement("img")

restaurantClipart.src = image1

restaurantClipart.alt = "restaurant clipart"

restaurantClipart.setAttribute("class", "restaurant-clipart")

const bodyText = document.createElement("div")

bodyText.setAttribute("class", "body-text")

bodyText.textContent = "This is an awesome restaurant. As soon as you enter, you are transformed into a cartoon. How's that for ambiance?"

const content1 = document.createElement("div")
content1.setAttribute("class", "content")
content1.appendChild(restaurantClipart)
content1.appendChild(bodyText)


export { content1 }