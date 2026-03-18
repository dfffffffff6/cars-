import {cars} from "./cars.js"
const container = document.querySelector("#container")
const inpValue = document.querySelector(".inpSearch")
const sortValue = document.querySelector("#inpSelect")
console.log(container)



function getData(qidir){
    container.innerHTML = ""
    qidir = qidir || cars
    qidir.map(i=>{
    const newDiv = document.createElement("div")
    newDiv.innerHTML = `
    <div class="body">
    <a href="./single.html?cars=${i.id}"> <img src="${i.img}" alt="" class="image"></a>
   
        <h1 class="title">${i.name}</h1>
        <strong class="price">${i.price}</strong>
        <p class="type">${i.type}</p>
        <button onclick="deleteCars(${i.id})" class="delete">del</button>
    </div>`
    container.appendChild(newDiv)
})
}
getData()
inpValue.addEventListener("keyup", (e)=>{
let filtered = cars.filter(car=>car.name.includes(e.target.value))
getData(filtered);

})
sortValue.addEventListener("change", (e)=>{
    if(e.target.value == "expensive"){
    let sorted =    cars.sort((a,b)=>b.price - a.price)

        getData(sorted);
        
    
}
 else if(e.target.value == "cheap"){
    let sorted =    cars.sort((a,b)=>a.price - b.price)
    getData(sorted);
        
    
}
})
window.deleteCars = function (id){
    console.log(id);
    const del =  cars.filter(car=>car.id !== id )
    getData(del)
}
