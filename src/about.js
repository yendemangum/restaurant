const content3 = document.createElement("div")
content3.setAttribute("class", "content")


import image2 from "./restaurant-clipart.png"

const restaurantClipart2 = document.createElement("img")

restaurantClipart2.src = image2

restaurantClipart2.alt = "restaurant clipart"

restaurantClipart2.setAttribute("class", "restaurant-clipart")

const p1 = document.createElement("p")
const p2 = document.createElement("p")

p1.textContent = "This restaurant was founded by Yende Mangum as a part of The Odin Project. Contrary to popular belief, it is not a real restaurant, as evidenced by the generic clipart photo used. "

p2.textContent = "Any resemblance to real restaurants is purely coincidental."

content3.append(restaurantClipart2, p1, p2)

export { content3 }