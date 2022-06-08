"use strict"

let dogs=[]

function saveDog(){
    let dog = {}
    dog.name = document.getElementById("name").value
    dog.age = document.getElementById("age").value
    dog.chipped = document.getElementById ("chippedYes").value
    dog.chipped = document.getElementById ("chippedNo").value
    dog.temperament = document.getElementById("temperament").value
    dogs.push(dog)//??? 
    renderDog(dog)
    localStorage.setItem("dog",JSON.stringify(dogs))
 }
function renderDog(Dog) {
    let title=document.createElement("div")
    title.className="box"
    document.body.appendChild(title)
    let name=document.createElement ("h2")
    title.appendChild(name)
    let age=document.createElement("p")
    title.appendChild(age)
    age.innerText=dog.age
    name.innerText=dog.name
}
function showDog(){
    dog=JSON.parse(localStorage.getItem("Dogs"))
    if(dog==null){dog=[]}
    for(let i=0; i<dog.length; i++){
        render(dog[i])
    }
    
}
    showDog()