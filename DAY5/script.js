// const array = ['ruby', 'python', 'cpp', 'java', 'typesript'];
// const array = [1, 2, 4, 5, 6, 7, 8]
// array.forEach(function (mohit){
//     console.log(mohit);
// })


// array.forEach((val) =>{
//     console.log((val * 5))
// })


// const mohit = document.querySelector('.parent');
// console.log(mohit.children);
// console.log(mohit.children[1].innerHTML);

// for(let i = 0; i < mohit.children.length; i++){
//     console.log(mohit.children[i].innerHtml);
// }

// mohit.children[1].style.color = 'red'
//console.log(mohit.lastElementChild);
// const rahul = document.querySelector('.day');
// console.log(rahul);
// console.log(rahul.parentElement);
// console.log(rahul.nextElementSibling);


const div = document.createElement('div');
console.log(div);
div.className ='main'
div.id = Math.round(Math.random() * 10 + 1)
 div.setAttribute("title", "generate title");
 div.style.backgroundColor = "green"
 div.style.padding = "12px"
//  div.innerText = "this is book"
 
 const addText = document.createTextNode("Chai Aur code");
 div.appendChild(addText);
 
 document.body.appendChild(div);
 




