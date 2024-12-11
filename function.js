// function
// keyword 
// return new this return let const var 
// normal function
function a(a,b){
return  (  
console.log(a-b)

        // a+b
)
}
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

function print(ans){
    console.log(ans) ; 
}
function add(a, b){
    print(a+b)
}

add(2,5);