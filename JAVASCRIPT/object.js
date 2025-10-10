// !Objects
//  an object is a collection of data in the form of key and value pairs.
var obj={
    sname:"yuvapriya",
    course:"Java Fullstack",
    age:21,
    Skills:["html","css","js","java","sql"],

}
// ?Create
// dot notation
// obj.keyname=value;
obj.gotjob="true";
obj.Nickname="yuvaz";
console.log(obj);

// bracket notation
// obj["keyname"]=value
obj.siblings=["deva","vishnu"];
obj.mobile=9790057927;
console.log(obj)

// ?Read
// dot Notation
// obj.keyname
console.log(obj.Nickname)
console.log(obj.sname)

// bracket notation
// obj["keyname"]
obj["keyname"]
console.log(obj["Skills"])
console.log(obj["course"])
console.log(obj["siblings"])


// ?Update
// dot Notation
// obj.existingKeyname=newvalue
obj.sname="Yuvapriya L";
obj.mobile="+91 9790057927";
obj.siblings=["Iniya","deva","vishnu"]
console.log(obj);

// Bracket Notation
// obj["existingKeyname"]=NewValue
obj["age"]=22;
obj["course"]="JFS";
console.log(obj);


// ?DELETE
// dot notation
// delete obj.keyname
delete obj.age;
delete obj.course;
console.log(obj);

// bracket notation
// delete  obj["keyname"]
delete obj["Mobile"];
console.log(obj);
 
console.log("********************")

// ~Object Methods
// ^1.keys()--- It will  dispaly all the keys present in an object.it wilkl return an array.

// ! syntax:Object.keys(objName)
let obj1={
    sname:"Yuva",
    age:21,
}
console.log(Object.keys(obj1));

// ^2.Values()--- It will  dispaly all the values present in an object.it wilkl return an array.
// ! syntax:Object.Values(objName)


console.log(Object.values(obj1));

// ^3.entries()--- It will  dispaly both the keys&values present in an object.it wilkl return an array.
// ! syntax:Object.entries(objName)

 console.log(Object.entries(obj1));
 

//  ^4.hasOwnProperty()---It will check if the  property is present or not.It will return the boolean value.
// ! syntax:ObjectName.hasOwnProperty(keyName)
console.log(obj1.hasOwnProperty("sname"));
console.log(obj1.hasOwnProperty("empname"));

// ^5.assign()---It will merge 2or more object into 1.
// or
//^ Object.assign(obj1, obj2, obj3, ...) - It will merge the object into first variable name
// !sysntax:Object.assign(target,source1,source2,.......sourceN)
 
var firstObj={
    name:"yuva",
    age:21,
};
var SecondObj={
    name1:"Dhanushya",
    age1:21,
};


var ThirdObj={
    name2:"Hema",
    age2:21,
};


var FourthObj={
    name3:"Deva",
    age3:21,
};
console.log("Before Merge")
console.log(firstObj)
console.log(SecondObj)
console.log(ThirdObj)
console.log(FourthObj)
console.log("After Merge")
var mergedObj=Object.assign({},firstObj,SecondObj,ThirdObj,FourthObj)
console.log(mergedObj)
console.log("....................")
// ! The value get updated
var myname={
    StudName:"Shiva",
    Work:"Enginner",
    StudName:"Nilavan",
    Work:"PetroChemical Engineer",
    location:"Coimbtore",
    StudName:"Dinesh",
    StudName:"NK",
StudName:"Pandi",
StudName:"Siva",

}
console.log(myname)

console.log("&&&&&&&&&&&&&&&&&&&&&")
// !DATE
// ^  Date() Method----It will return the date  with full information
var d= new Date();
console.log(d);
// There are 2 methods getters,setters
// Getters
console.log("^^^^^^^^^^^^");
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getTime());
console.log(d.getMilliseconds());
console.log("++++++++++++++++++++++++");
// Setter
// var d=new Date("2002 11 07","10:45:50");
console.log(d);
d.setFullYear(2030);
d.setMonth(10);
d.setDate(7);
d.setHours(8);
d.setMinutes(30);
d.setSeconds(20);
d.setMilliseconds(1001);
// dt.setTime("10:20:22");
console.log(d)


