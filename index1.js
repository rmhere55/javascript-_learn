// set 
// arr

//  var a = {
//     name  : "RM",
//     age: 24
//  }

//  delete a.age

//  console.log(a) // { name: 'RM' }
 //   copy referance 
//  var a = 20;
//  var b = a;
//  b = 30;
//  console.log(a) 
//  console.log(b) 
//    arr
let arr = [1,3,4,3]

var b = [...arr]
console.log(arr);
b.pop()
console.log(b);
console.log(arr);


var obj = {
    name :"raj"
}
 var o1 = {...obj}
console.log(o1);
console.log(obj);

//  truthy   and falsy
// truthy  all type of value
//  falsy values

// 0  false undefined  null NAN document.all 
 var h = 0
if(h){
    console.log("h")
}
else{
    console.log("hello");
    
}

//  truthy 
var k = -1
if(k){
    console.log("h")

}
else{
    console.log("hello");
}
console.log(k)

// array.forEach(element => {
    
// });
// for 