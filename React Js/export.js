// This is Coimbatore
// import { product3 } from './export';
// Exporting File

// ?Default Export
// let sname="Arun";
// export default sname;

//  let age =22;
//  export default age;

// let course="React JS"
// export default course;


// ?Named Export

// !case1:
// let product1="dress"
// export let product2="Ear Rings"
// export let product3="BeerBottle"
// let product4="Bangles"
// export let product5="Chocolates"

// !case2:
// let product1="dress"
// let product2="Ear Rings"
// let product3="BeerBottle"
// let product4="Bangles"
// let product5="Chocolates"

//  export{product2}
//  export{product3}
//  export{product5}

//  !case3:
// let product1="dress"
// let product2="Ear Rings"
// let product3="BeerBottle"
// let product4="Bangles"
// let product5="Chocolates"

// export{product5,product2,product3};


// !case4:Passing Alias  Name while exporting
/*
let product1="dress"
let product2="Ear Rings"
let product3="BeerBottle"
let product4="Bangles"
let product5="Chocolates"

export{
    product2 as prod2 ,
    product3 as prod3 ,
    product5 as prod5
};
*/
// !case5:Passing Alias  Name while exporting and importing

// let product1="dress"
//  let product2="Ear Rings"
//  let product3="BeerBottle"
//  let product4="Bangles"
//  let product5="Chocolates"


// export{
//     product2 as prod2 ,
//     product3 as prod3 ,
//     product5 as prod5
// };

// !case5:Multiple data types

/*
let sname="yuva"
let age="22"
let favanimal="Tiger"
 let  friendname="Deva"
let boyfriend=["Ambhi","Remo","Anniyan"]
let enemy={
ename:"Surya",
age:23,
nickname:"Manda"
}

let husbandname=null;

function sum(a,b){
return a+b;
}

export{sname,age,favanimal,boyfriend,friendname,enemy,husbandname,sum}

*/

// !case 7:Functions and Alias Names


function addition(a,b){
    return a+b;
}

function subtraction(a,b){
    return a-b;
}

function Multiplication(a,b){
    return a*b;
}

function Division(a,b){
    return a/b;
}

export{
    addition as add,
    subtraction as sub,
    Multiplication as mul,
    Division as div
};

let trainerName="Bobby Perecharla"
export default trainerName;





