console.log("start");
var a=10;
console.log(a);

function add(){
    var m=100;
    var n=200;
    return m+n;
}
console.log(add())
console.log("In between the functions")
console.log(add())
console.log("end")

// Types of  Functionss....
// ?1.Named Fuctions
//A function created  with function name is called Named  Functions
function add(a,b){
return a+b;
}
console.log(add(10,20))

//..........
function SayHello(){
    return "Hello yuvapriya"
}
console.log(SayHello)
console.log(SayHello())

//?2.Annonyoums Function
//A function created  without function name is called Annonyoums  Functions
let sum=function (n){
return  n**2
}
console.log(sum)
console.log(sum(2))

//?3.First Class Function
//A function storing inside a variable is called First  Class Function
//First Class Function can be annonyoums function or named functions or Arrow Function


//?4.Functional Expression
//The Whole Expressions of storing a  function into a variable is called  a functional expression

// ?5.Arrow Function
//It is a function which  is used to  reduce the code lines
// !Case 1:
let  square=(n)=>{
    return n*2;
}
console.log(square)
console.log(square(3));

// !Case 2: --- If we have only one parameter then paranthesis is not required
let square1 =n1=>{
    return n1*2;
}
console.log(square1);
console.log(square1(3));

// !Case 3:--- If we have only one statement in a block then block {} is not required && it does not  return anything so 
// return statement is not required 
let square2 = n3 => n3*3;
console.log(square2);
console.log(square2(2));


// ?6.Immediate Invokation Function Expression(IIFE)
//(funtion)(Invokation)
(function(a,b){
    console.log(a+b)
})(10,20);

(function (sname) 
{console.log("helloyuva", sname)})
("how are you????");

(function(f){
    console.log(f**2);
})(10);




// ?7.higher Order Function
//It is a function it will takes the another function as a argument
// !Adv--- to split the larger code
//!Overcome the drawbacks----lines of  code is tooo large,we cannot acces any feature outside of program, if any modifications we check the whole programss

