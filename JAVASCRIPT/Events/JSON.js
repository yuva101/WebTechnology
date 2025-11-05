// !================JSON===================
/*JSON(JavaScript Object Notation) is a lightweight, text-based data interchange format widely used in JavaScript and across various programming languages.
It is designed to be human-readable and easily parsed by machines making it ideal for sorting and exchanging data,especially in wb applicatins and APIs.


// ?Key characteristics of JSON:
--Derived from Javascript :Its syntax closely resembles Javascript object literls.
--Language-independent:While originatig from JavaScript ,it is supposed and used by most modern programming language.
--Text-based:Data is represented is plain text,making it easy to transmit.
--Human-readable:Uses key-value pairs and arrays structures for clear organization.

// ?Rules  of JSON
--save the file with .json extension
--we cannot store the data inside a variable
--we have to store the data in objects or array format onlyy.
--JSON object keys must be strings only.

// ?Datatypes allowed in JSON
-Object
-Array
-Array
-Number
-Boolean
-Null


*?
// ?Case 1:Array
var data=["Hema","Yuvaa","Deva","Arun","Priya"];

// ?Case 2:Object
data={sname:"yuva",age:20,course:"JavaFullstack",loc:"arasur"}
// ?Case 3:Array inside Array
data=[
    ["Vishnu",20,"BE"],
    ["Muthu",22,"B.Tech"],
    ["Dhanush",21,"BE"],
    ["Mani",21,"B.Tech"],
    ["Nisha",23,"BE"]

];
// ?Case 4:Object inside Object
data={
    Kani:{Fullname:"Kanimozhi",Course:"JFS",loc:"Sathymangalam"},
    Mani:{Fullname:"Manikandan",Course:"PFS",loc:"Erode"},
    Mouni:{Fullname:"Mouunika",Course:"JFS",loc:"Sathy"},
    Vini:{Fullname:"Vinitha",Course:"PFS",loc:"Gobi"},
    Thani:{Fullname:"Thaniga",Course:"JFS",loc:"CBE"}

}

// ?Case 5:Array inside Object

data={
    yuvaGang:["Vishnu","Jenni","Sharmila"],
    Nishagang:["Poovizhi","Swasthika","Maha"],
    RubhaGang:["Sivaranjani","Susan","Madhushree"],
    MuthuGang:["Guna","Mani","Dhanush","Iniya"],
}
// ?Case 6:Object inside Array
data=[
    {Prodectname:"Rice",Price:1200,Discount:10},
    {Prodectname:"Noodles",Price:20,Discount:0},
    {Prodectname:"Tomato",Price:60,Discount:2},
    {Prodectname:"Biscuit",Price:10,Discount:0},
    {Prodectname:"Maida",Price:40,Discount:2}
]
// ?ExtraCase 

console.log(data)//here  it is js data
console.log(typeof data)//object----typeof string is object only

let jsondata=JSON.stringify(data)
console.log(jsondata)//here it is json data
console.log( typeof jsondata)//string

let jsdata=JSON.parse(jsondata)
console.log(jsdata)//here it is js data
console.log( typeof jsdata)//object

// for (let val of data){
//     console.log(val)
// }
// for (let val of jsondata){
//     console.log(val)}
