// function
// keyword 
// return new this return let const var 
// normal function
// function a(a,b){
// return  (  
// console.log(a-b)

//         // a+b
// )
// }
// console.log(a(2,4))

// arrow function
// const b = () => {
//   console.log(a())
// }
// console.log(b())

// callback function

// setTimeout(
//     function(){
    
//         console.log("2sec");

// } 
// ,2000)


// function add( a){
//  return a
// }
// function calculator( num1, num2, callback){
//   let sum = num1+num2
//   callback(sum)
// }
// console.log(calculator(2,3,add))

// function print( ans ){
//     console.log(ans) ; // 7
// }

// function print(ans){
//     console.log(ans) ; 
// }
// function add(a, b){
//     print(a+b)
// }

// add(2,5);



// function
// keyword 

// return new this  let const var 
// normal function

// function a(){

// }
// arrow function
// var abc = () =>  
//     {  
//         console.log("hy")
//     }
// console.log(abc)

// keyword
// new  this  return  let const var 
// let v =0 , vt = 0
// vr = 99
// function hy(){
//     // return    
//   return(
    
//     console.log("hy")
// )
// }

// hy()

// callback  function 

// function print(ans){
//     console.log(ans) ; 
// }

// function mul(a,b){
//     print(a*b);
//     // print(5*6= 30)
// }

// mul(5,6);  // 30
// function add(a, b){
//      print(a+b)
// }
// function sub(a, b){
//      print(a-b)
// }


// setTimeout(
//     function (){
//     console.log("hyyy2sec");
// } 
// ,2000)

// add(2,5);
// sub(2,77777);

// Anonymous Function 

// const multiply = function(a, b) {
//     return a * b;
//   };
  
//   console.log(multiply(4, 5)); // Output: 20

//   arrow function

  // const subtract = (a, b) => a - b;

  // console.log(subtract(10, 6)); // Output: 4


// FIRST CLASS FUNCTION 
// let vet = "hyyy"
// const greet = function(name) {
//     return `HELLO ${name} , ${vet}`;
//   };
  
  // console.log(greet("Alice")); // Output: Hello, Alice!

  
  // function execute(fn, value) {
  //   return fn(value);
  // }
  
  // const sayHi = (name) => `Hi, ${name}!`;

  // console.log(execute(sayHi, "Bob")); // Output: Hi, Bob!

// keyword
// return  this new let const var

  
  function multiplier(factor) {
    return function(number) {
      return number + factor;
    };
  }
  
  const double = multiplier(2);
  console.log(double(5)); // Output: 10
  
    