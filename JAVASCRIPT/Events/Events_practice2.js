// !EVENTS ON DOM PROPERTIES

let body=document.body
// create element
let section=document.createElement("section")
let btn1=document.createElement("button")
let btn2=document.createElement("button")

console.log(btn1)
console.log(btn2)
// insert the  text
btn1.innerHTML="Add a Square Box"
btn2.innerHTML="Add a Circle Box"

// push into the body
body.append(btn1,btn2,section)

section.style.cssText=`
display:flex;
flex-wrap:wrap;`
;

btn1.onclick=function () {
    // we can use anonymous function because we no need to specify the function name
let div=document.createElement("div")
div.style.cssText=`
height:100px;
width:100px;
border:solid;
background-color:pink;`
;

    div.onmouseover=function(){
        console.log("You just moved cursor on btn1")
        div.style.cssText += `background-color:violet`;
    }   

    div.onmouseout=function(){
        console.log("You just moved cursor out of btn1")
        div.style.cssText += `background-color:pink`;
    }
section.append(div)
};


btn2.onclick=function ()
{
    // we can use anonymous function because we no need to specify the function name
let div=document.createElement("div")
div.style.cssText=`
height:100px;
width:100px;
border:solid;
border-radius:50%;
background-color:teal`;


div.onmouseover=function()
{
console.log("You just moved cursor on btn1")
div.style.cssText += `background-color:crimson`
}

div.onmouseout=function(){
console.log("You just moved cursor out of btn1")
div.style.cssText += `background-color:teal`
}
 section.append(div)
};