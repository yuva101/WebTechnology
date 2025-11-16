//This is Chennai or Bangalore or Madurai or etc...
//Importing File

/*
Modules:
-Modules helps us to split the large
  amount of code into multiple pieces.
-To work with modules,we have to use type="module" in script tag.
-There are 2 types of Exports&Imports.

Default export/import
-default export can export only one variable at a time.
-while importing same variable name is not required.
-we can import default exports with any identifer name.
systax: impost anyvariableName from "path";

Named export/import
-syntax: import{sameVariableName} from "path";
*/


// ?Default Import
/*
import sname from "./export.js";
console.log(sname);

import age from "./export.js";
console.log(age);
*/

// import course from "./export.js";
// console.log(course);

/*
import data from "./export.js";
console.log(data);

*/

// ?Named Import
/*
import data from "./export.js";  //Here, js will treat as default export 
import {data} from "./export.js";  //Here ,js will treat as named export

*/

// !Case1 & Case2:
/*
import{product2} from "./export.js";
console.log(product2);

import{product3} from "./export.js";
console.log(product3);

import{product5} from "./export.js";
console.log(product5);
*/

// !Case 3 : importing in single line

// import {product2,product3,product5} from "./export.js";
//  console.log(product2)
//  console.log(product3)
//  console.log(product5)

// !Case 4 : importing in single line with alias name

//  import {prod2,prod3,prod5} from "./export.js";
//  console.log(prod2)
//  console.log(prod3)
//  console.log(prod5)
 

// !Case 5:Passing alias name while Exporting and Importing
/*
import{prod2 as p2, prod3 as p3,  prod5 as p5} from "./export.js"
console.log(p2)
console.log(p3)
console.log(p5)
*/

// !Case 6:Multiple data types
/*
import{sname,age,favanimal,boyfriend,friendname,enemy,husbandname,sum} from "./export.js"
console.log(sname)
console.log(age)
console.log(favanimal)
console.log(boyfriend)
console.log(friendname)
console.log(husbandname)
console.log(enemy)
console.log(sum) // whole function
console.log(sum()) //  NAN
console.log(sum(10,20)) //  30

*/
// !Case7:Functions with alias Name

import{add,sub,mul,div} from "./export.js"

console.log(add)//whole function
console.log(add())//NAN
console.log(add(10,20))//30

console.log(sub)//whole function
console.log(sub())//NAN
console.log(sub(50,20))//30


console.log(mul)//whole function
console.log(mul())//NAN
console.log(mul(10,20))//200


console.log(div)//whole function
console.log(div())//NAN
console.log(div(40,20))//2

// !Case7.1: Function with Alias name

import * as allFunctions from "./export.js"
console.log(allFunctions)

console.log(allFunctions.add)//whole funtion
console.log(allFunctions.add())//NAN
console.log(allFunctions.add(10,20))//30
console.log(allFunctions.sub)//whole funtion
console.log(allFunctions.sub(70,20))//50

console.log(allFunctions.default)//Bobby Perecharla







