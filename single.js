import {cars} from "./cars.js"
const url = location.search
const newIdid = new URLSearchParams(url).get("cars-id")
 const filterId = cars.find(car=>{
    return car.newIdid == id
})
console.log(filterId);

