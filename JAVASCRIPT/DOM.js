// ?Id Name
// syntax:document:getElementById("identifier");
// It will target only the first matching element
// Even we have multiple elements with same id also,it will get onky the first matching one.

// !console.log(document)It will provide access to the whole document
let elementOne=document.getElementById("elementOne")
console.log(elementOne)
let elementTwo=document.getElementById("elementTwo")
console.log(elementTwo)


// ?Class Name
// It will Target the element based on the class name
// It will target all the matching elemnts in the DOM tree
// syntax:document.getElementsByClassName("classname")
let demo1=document.getElementsByClassName("demo1")
console.log(demo1)
let demo3=document.getElementsByClassName("demo3")
console.log(demo3)
let demo5=document.getElementsByClassName("demo6")//even if demo6 not  defined it create one empty collection of []
console.log(demo5)

// ?Tag Name
// It will target the element based on tag name.
// It will target all the matching elemnts in the DOM tree
// syntax:document.getElementsByTagName(TagName)
let h3Tags=document.getElementsByTagName("h3")
console.log(h3Tags)
let p=document.getElementsByTagName("p")
console.log(p)
let i=document.getElementsByTagName("i")
console.log(i)
let section=document.getElementsByTagName("section")
console.log(section)


// ?Name Attribute
// It will target the element based on the  attribute
// It will target all the matching elements  in the DOM tree
// syntax:documnet.getElementsByName(Attribute name)
let userNames=document.getElementsByName("userName")
console.log(userNames)
console.log(userNames[0])
console.log(userNames[0].value);
userNames[0].value="Yuvapriya";
console.log(userNames[0].value)
console.log(userNames[1].value)

userNames[1].value="DevaDharshini"
console.log(userNames[1].value)

let userEmails=document.getElementsByName("userEmail")
console.log(userEmails)
userEmails[0].value="Yuvapriya@gmail.com"
console.log(userEmails[0].value)
userEmails[1].value="DevaDharshini@gmail.com"
console.log(userEmails[1].value)

let MobileNumbers=document.getElementsByName("userMobile")
console.log(MobileNumbers)
MobileNumbers[0].value=9790057927
MobileNumbers[1].value=6432874629
console.log(MobileNumbers[0].value)
console.log(MobileNumbers[1].value)


// ?querySelector()
// It will target the elements based on the id,class,tagname
// It will target first matching the element in the  DOM tree
// syntax:document.querySelector("id/class/tagname")
// we have to use the symbols for the id name and class name.

let  idname=document.querySelector("#elementOne")
console.log(idname)//Id name

let  classname=document.querySelector(".demo1")
console.log(classname)//Class Name

let  Tagname=document.querySelector("h3")
console.log(Tagname)//Tag name


// ?querySelectorAll
// It will target the elements based on the id,class,tagname
// It will target all the matching the element in the  DOM tree
// syntax:document.querySelectorAll("id/class/tagname")
// we have to use the symbols for the id name and class name.

let  idname1=document.querySelectorAll("#elementOne")
console.log(idname1)//Id name

let  classname1=document.querySelectorAll(".demo1")
console.log(classname1)//Class Name

let  Tagname1=document.querySelectorAll("h3")
console.log(Tagname1)//Tag name




