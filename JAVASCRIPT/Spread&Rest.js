// !Spread
// !================Array================
// ?Example 1
// var ar=[10,20,30,40,50,60]
// console.log(ar)//actual data
// console.log(...ar)//spreaded data
// console.log([...ar])//spreaded data into array
// console.log({...ar})//spreaded data into objects

// ?Example 2
// var arr1=[10,20,30,40]
// var arr2=[50,60,70,80]

// var ar=[arr1,arr2]
// console.log(ar)

// var ar=[...arr1,arr2]
// console.log(ar)

// var ar=[...arr1,...arr2]
// console.log(ar)

// var ar=["yuva","deva",arr1,"iniya",arr2,"muthu"]
// console.log(ar)

// var ar=["yuva","deva",...arr1,"iniya",arr2,"muthu"]
// console.log(ar)

// var ar=["yuva","deva",...arr1,"iniya",...arr2,"muthu"]
// console.log(ar)


// ?Example 3
// var arr1=[10,20,30,40]
// var arr2=[50,60,70,80]

// var obj={arr1,arr2}
// console.log(obj)

// console.log(arr1)
// console.log(arr2)

// var obj={...arr1,...arr2}
// console.log(obj)

// var obj={...arr2,...arr1}
// console.log(obj)


// !===========object==============

var obj1={
    sname:"yuva",
    age:21,
    rajyamname:"Dolakpur"
};
var obj2={
    sname:"deva",
    age:22,
    rajyamname:"magizhmathii"
};
console.log(obj1)
console.log(obj2)

var obj={obj1,obj2}
console.log(obj)//{obj1:{sname:"yuva",age:21,rajyamname:"Dolakpur"},obj2:{ sname:"deva", age:22,rajyamname:"magizhmathii"}}


var obj={...obj1,obj2}
console.log(obj)//{sname:"yuva",age:21,rajyamname:"Dolakpur",obj2:{ sname:"deva", age:22,rajyamname:"magizhmathii"}}


var obj={...obj1,...obj2}
console.log(obj)//{ sname:"deva", age:22,rajyamname:"magizhmathii"}


var obj={...obj1,...obj2,sname:"Vishnu",age:23}
console.log(obj)//{sname:"Vishnu",age:23,rajyamname:"magizhmathii"}

// !Rest operator
// ?example 1
function sum(a,b,c,d,...e){
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(e)
}
sum(10,20,30,40,50,60,70,80,90,100);

// ?example 2
function sum(...numbers){
    console.log(numbers)//[10,20,30,40,50,60,70,80,90,100]


var res=0;
 for(let  i of numbers){
    console.log(i)
    res+=i;
 }
 console.log(res)

}
sum(10,20,30,40,50,60,70,80,90,100);
