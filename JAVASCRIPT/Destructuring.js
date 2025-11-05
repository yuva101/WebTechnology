// Destucturirng
// ! Arrays
// var  ar=[10,20,30,40,50]
// console.log(ar)

// ?wihtout destructuring
// var a=ar[0]
// var b=ar[1]
// var c=ar[2]
// var d=ar[3]
// var e=ar[4]

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

// ?with destructuring
// ?example 1
// var[a,b,c,d,e]=ar;
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)


// ?example 2
// var ar1=["yuva","deva","vishnu","muthu","iniya"]
// var[a,b,c]=ar1;
// console.log(a)
// console.log(c)
// console.log(b)

// ?example 3
// var ar1=["yuva","deva","vishnu","muthu","iniya"]
// var[,,,d]=ar1;
// console.log(d)


// ?example 4
// var ar1=["yuva","deva","vishnu",["mani","dhanush"],"muthu","iniya"]
// var[a,,,[c1,c2],f]=ar1;
// console.log(a)
// console.log(c2)
// console.log(f)

// ?example 5
// var skills=["java","sql","manual",["react js","node js","typescript"],"webtech"]
// var[,,,[,,c],d]=skills;
// console.log(c)
// console.log(d)

// !Objects
// ?without
// obj={
//     sname:"yuva",
//     age:21,
//     loc:"coimbatore",
// };
// console.log(obj)

//  var d1=obj.sname;
//  var d2=obj.age;
//  var d3=obj.loc;
//  console.log(d2)

//  ?with
// ?example 1
obj={
    sname:"yuva",
    age:21,
    loc:"coimbatore",
    course:"JFS"
};
console.log(obj)

var{d1,d2,d3,d4}=obj;
console.log(d1)//yuva ❌❌undefined
console.log(d2)//21❌❌undefined
console.log(d3)//coimbatore❌❌undefined
console.log(d4)//JFS❌❌undefined
 
// ?Note We have to destricture the object  data with keyname itself only

// ?Example 2  Keyname as a variable name
var obj={
    sname:"Deva",
    age:21,
    Course:"JavaFullStack",
    user_Loc:"Gobi"

};
console.log(obj);

var{sname,age,Course,user_Loc}=obj
console.log(sname)//Deva
console.log(age)//21
console.log(Course)//JavaFullStack
console.log(user_Loc)//Gobi

// ?example 3 alias name

var obj={
    sname:"Vishnu",
    age:23,
    Course:"JFS",
    user_Loc:"Salem",
    Skills:{frontend:"React JS",database:"SQL",backend:"JAVA"}
}
console.log(obj)

var {
    sname:User_name,
     age:User_age,
     Course:User_Course,
     user_Loc:User_Location,
     Skills:User_Skills

}=obj;

console.log(User_name)
console.log(User_age)
console.log(User_Course)
console.log(User_Location)
console.log(User_Skills)

// ?example 4

var obj1={
    sname:"Vishnu",
    age:23,
    Course:"JFS",
    user_Loc:["Salem","Coimbatore"],
    Skills:{frontend:"React JS",database:"SQL",backend:"JAVA"}
}
console.log(obj1)

var {
    sname:User_name,
     age:User_age,
     Course:User_Course,
     user_Loc:[locationOndru,locationIrandu],
     Skills:{frontend,backend,database:db}

}=obj1;

console.log(locationOndru)
console.log(locationIrandu)
console.log(frontend)
console.log(backend)
console.log(db)