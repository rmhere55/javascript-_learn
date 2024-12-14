// function  
//  normal function 
//  function hy (){
//     return console.log(" hy");
    
//  }

//  hy()

// callback  function 

function print (ans){
    console.log(ans)
}
function add(a,b){
    print(a+b)
}
add(5,6)

// rest 

function calcuatePrice(val, val2, ...num1){
    return num1
}
// console.log(calcuatePrice(1,2,3,4,5))
 const mysym = Symbol("kyy")
const user ={
    name : "rm",
    price : 199,
    [mysym] : "kyy"
}
// Object.freeze(user)
user.gretting = function(){
    console.log(`hello ${this.name}`)
}

function handleObject(anyobject){
    console.log(`${anyobject.name} and price ${anyobject.price}`)
}
// handleObject(user)

handleObject({
    
    name : "rm",
    price : 199
})




const myarr = [100, 2000, 3000]

function returvalue(getArry){
    return getArry[1]
}
// console.log(returvalue(myarr))


// ... sapreter  opretor  

// rest op
 function calcuateprice(val, val2 ,...num1){
  return num1
 }

 console.log(calcuateprice(1,2,3,4))
 const sym = Symbol("key1")
const Object1 = {
    name : "rm",
    price : 199,
    "sym" : "kyy"

}
console.log( Object1["sym"])

Object.freeze(Object1)
Object1.name = "laptop"
console.log(Object1.name)


 function obj(obj1){
    return obj1
 }
//  console.log(obj
//     (Object1
// ))
function arry(gett){
    return gett
}
// console.log(arry([1,2,3,4,5]))