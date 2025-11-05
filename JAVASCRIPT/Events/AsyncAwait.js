// !Async
// Async is a keyword, we have to use just before the  function
// Async will convert the synchronous functions into asychrnous function
// Aysnc function will always return a Promise.

// ?Example 1
//  function greetuser(){
//     return "Hello user,How are you";
//  }
//  console.log(greetuser)//whole function
//  console.log(greetuser())//"Hello user,How are you


// ?Example 2

// async function greetuser(){
//     return "Hello user,How are you";
//  }
//  console.log(greetuser)//whole function
//  console.log(greetuser())//promise

// ?Example 3

// let add=function(a,b){
//     return a+b;
// }
// console.log(add)//whole function
// console.log(add())//NAN---- undefined * undefined

// ?Example 4
let add=function(a,b){
    return a+b;
}
console.log(add)//whole function
console.log(add(10,20))//30

// ?Example 5

let add1= async function(a,b){
    return a+b;
}
console.log(add1)//whole function
console.log(add1(10,20))//promise

// ?Example 6
let square=n=>n**2
console.log(square)//whole function
console.log(square())//25

let square1=n=>n**2
console.log(square1)//whole function
console.log(square())//promise

// ~Async function---->normal data --->wrap into promise---->Promise
// ~Async function----->promise data---->wrap into promise---->Promise

// ?Example 7
function getData(){
    return "Hello"//normal data
}
console.log(getData())//'Hello'

let p=new Promise((res,rej)=>{
    res("Hello I am Promise")

});

 function getData1(){
    return p;//promise data
 }
 console.log(getData1())//Promise-fullfilled


 async function getData2(){
    return p;//promise data
 }
console.log(getData2())//promise-pending


// !Await
// ?Await is keyword we have to use inside async function only
// ?Await keyword we have to use just before  the promise to consume the data
// ?Await will hold the callstack until the promise get  fullfilled

// ^Why Await is most popular then promise
    // promise does not hold callstack
    // Await will hold the callstack

    // promise will allow other statements will execute
    // Await will not allow other statements to excute untill the respective statement will execute.

    let obj=new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Yes it's  done")
        },8000)
    })

    async function getData3(){
// ?consuming using promise  way

obj.then(data=>{
    console.log(data)
});
console.log("end")

// ?consuming using await  keyword
let result=await obj;
console.log(result)
return  result;
    }
    console.log(getData3)