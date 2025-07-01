// function newNumber(){
//     let  randomNumber = Math.random();
//     let moveNumber = randomNumber * 3;
//     return moveNumber;
// }
// console.log(newNumber());
// console.log(newNumber());
// console.log(newNumber());
// console.log(newNumber());
// console.log(newNumber());
// console.log(newNumber());
// console.log(newNumber());



// function addNewAge(){
//     let age ;
//     if(age === undefined){
//     return 'App Awatar ho.'
// }
// let status;
//     if(age > 18){
//         status = 'You can drive';
//     }else{
//         status = 'Use Bicyle.';
//     }
//     return status;
// }
// console.log(addNewAge());

// function sum(x,y){
//     let sum = x + y;
//     return sum;
// }
// console.log(sum(3,4));
// console.log(sum(3,4));
// console.log(sum(3,4));
// console.log(sum(3,4));
// console.log(sum(3,4));
// console.log(sum(3,4));


// function greeting(name){
//     console.log(`hello ${name}`);
// }
// greeting('Mohit');

// function averageNumber(a, b, c){
//     let sum = (a + b + c)/3;
//     console.log(sum)
// }
  
// averageNumber(3, 4, 6);



// let str = ["Hi","Hello","Bye","!"];
// function concat(str){
//     let result="";

//     for(let i=0; i<str.length; i++){
//         result += str[i];
//     }
//     return result;  
// }


// let greet = "Hello";

// function changeGreet(){
//     let greet = "namaste";
//     console.log(greet);
//         function innerGreet(){
//             console.log(greet);
//         }
        
// }
// console.log(greet);
// changeGreet();


//function Expressions 
// let name = "Mohit";

// let sum = function(a,b){
//     return a+b;
// }

// let hello = function(){
//     console.log("hello mohit");
// }
// hello()

//Higher order function
// function multiGreet(func, n){
//     for(let i=1; i<=n; i=i+1){
//         func();
//     }
// }
// let greet = function(){
//     console.log("Hello");
// }

// multiGreet(greet, 2)


//Higher Order Functions Returns A function
// function oddEvenTest(request){
//     if(request == "odd"){
//         return function(n){
//             console.log(!(n%2 == 0));
//         }
//     } else if(request == "even"){
//         return function(n){
//             console.log(n%2 == 0);
//         }
//     } else{
//         console.log("Wrong request");
//     }
// }
// let request = "even" // odd


// //Methods Function
// const calculator = {
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b;
//     }
// };

// calculator.add(3,4)



