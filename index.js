let content = document.querySelector('.js-generated.content')

// <h1 class="dog-name">Rizzo</h1>
let header = document.createElement("h1")
header.setAttribute("class", "dog-name")
header.append("Rizzo")

content.append(header)

// <div class="dog-content">
let dogContent = document.createElement("div")
dogContent.setAttribute("class", "dog-content")

content.append(dogContent)

// <img class="dog-image" src="./assets/rizzo.jpg">
let dogImage = document.createElement("img")
dogImage.setAttribute("class", "dog-image")
dogImage.setAttribute("src", "./assets/rizzo.jpg")

dogContent.append(dogImage)

// <div class="dog-details">
let dogDetails = document.createElement("div")
dogDetails.setAttribute("class", "dog-details")

dogContent.append(dogDetails)

// <h3>Description:</h3>
let description = document.createElement("h3")
description.append("Description:")

dogDetails.append(description)

// paragraph
let paragraph = document.createElement("p")
paragraph.append(`This gentle dog is aloof toward her owner, and never comes when called.
She always acts as though any stranger she meets will harm her, and
dislikes other animals.`)

dogDetails.append(paragraph)

// <h3>Feeding Times:</h3>
let feedingTimes = document.createElement("h3")
feedingTimes.append("Feeding Times:")

dogDetails.append(feedingTimes)

// time list
let list = document.createElement("ul")

let li1 = document.createElement("li")
let li2 = document.createElement("li")
let li3 = document.createElement("li")

li1.append("9:00 am")
li2.append("12:00 pm")
li3.append("5:00 pm")

list.append(li1)
list.append(li2)
list.append(li3)

dogDetails.append(list)