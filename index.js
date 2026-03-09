import {cars} from "./cars.js"
const container = document.querySelector("#container")
console.log(container)

cars.map(i=>{
    const newDiv = document.createElement("div")
    newDiv.innerHTML = `
    <div class="body">
    <img src="${i.img}" alt="" class="image">
        <h1 class="title">${i.name}</h1>
        <strong class="price">${i.price}</strong>
        <p class="type">${i.type}</p>
    </div>`
    container.appendChild(newDiv)
})
