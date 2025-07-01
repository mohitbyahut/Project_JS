// const student ={
//     name : "Mohit",
//     age: 21,
//     eng: 90,
//     math: 45,
//     hindi: 99,
//     getAvg(){
//         let avg = (this.eng + this.math + this.hindi)/3;
//         console.log(avg);
//     }
// }



// const sum = (n) =>{
//      return n*n;
//     }

// console.log("hi bro");

// setInterval(() => {
//    console.log('Its own time');
   
//  } ,4000);
// console.log('welcome sir');

// clearInterval()


// Write a JavaScript function that returns array elements larger than a number.
// let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
// let num = 5;
// //elements larger than a number num
// function getElements(arr, num) {
// for (let i = 0; i < arr.length; i++) {
// if (arr[i] > num) {
// console.log(arr[i]);
// }
// }
// }
// getElements(arr, num);


for(let i =0; i<=4; i++){
  console.log(`outer loop : ${i}`);
    for(let j = 0; j<=4; j++){
      //console.log(`inner loop ${j} inner loop  mohit ${i}` )
      console.log(i + '*' + j + '=' + i*j);
    }
}

// for(let i =1; i<=20; i=i+1){
//   console.log(i)
// }