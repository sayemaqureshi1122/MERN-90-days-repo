
// console.log("Day 0 discipline start");
// // Topics to cover today
// /*
// Minimum 25 lines demonstrating:

// Declaration vs expression vs arrow
// Function returning values
// Nested function
// Parameters vs arguments
// Function execution context difference

// var x = 1;

// a();
// b();
// console.log(x);
// function a(){
//     var x = 10;
//     console.log(x);
// }

// function b(){
//     var x = 100;
//     console.log(x)
// }

// // Q1] write a js program to print the marks of students

// let marks = {
//     sayema :90,
//     vidu: 89,
//     bux : 17
// };

// for (let i = 0; i <Object.keys(marks).length; i++){
//     console.log(Object.keys(marks)[i]+ "'s marks are " + marks[Object.keys(marks)[i]]);
// }
// let num = 10;
// //Q2] Write a function declaration named square that takes a number and returns its square.
// const square = (num) =>{
//     return num*num;
// }
// square_res = square(num);
// console.log(square_res);

// //Q3] Write a function declaration isEven that returns true if a number is even, otherwise false.
// const is_even = (num) =>{
//     if(num % 2 == 0){
//         return true
//     }
//     else{
//         return false
//     }
// }
// let isnumeven = is_even(num);
// console.log(isnumeven);
// */

// // // Function statement/ declaration
// // function names() {
// //     console.log("sayema");
// // }
// // names();
// // //Function expression
// // var printname = function xyz(){
// //     console.log("function created using function expression.")
// // }
// // printname()
// // // //Anonymous Function
// // // function (){

// // // }
// // //Named function expression
// // var newname = function xyz(){
// //     console.log(xyz);
// // }
// // newname();
// // //First class function
// //  function m(param1, param2){
// //     return function(){
// //     }
// //  }
// //  m()
// // //Arrow function

// // var var1 = ()=>{
// //     console.log("arrow function created.")
// // }
// // var1()
// // let age;
// // console.log(age);

// // let number = 1234;
// // function digitcount(number){
// //     let count = 0;
// //     while(number > 0){
// //         number/10
// //     }
// // }
let a = 10;
var b = 20;
function local (){
    var x = 11;
    return x;
}
console.log(a);
console.log(window.b);
console.log(a);
console.log(b);
console.log(a);
console.log(this.b)
local()

