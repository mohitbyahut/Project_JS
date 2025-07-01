
let box1 = document.querySelector("#box1")
let box2 = document.querySelector("#box2")
let box3 = document.querySelector("#box3")
let childBoxC = document.querySelector(".childBoxC")

console.log(box1, box2)


function box1f(){
    box1.style.display="block"
}
function box2f(){
    box1.style.display="block"
    box1.style.backgroundColor="red"
    box2.style.backgroundColor="yellow"
}
function box3f(){
    // childBoxC.style.display="block"
    box1.style.display="none"
    box2.style.display="none"
}

