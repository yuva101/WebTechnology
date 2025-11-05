// to create an element by js code
let p=document.createElement("p")
    p.innerHTML="Hello p tag"
let body=document.body  // another way of targetting the body
body.append(p);


// !Create
// setAttribute()----->node.setAttribute("attributename","attributeValue")
// we can  use let body=document.body; for targeting body without using DOM selectors
let h1=document.querySelector("h1")
console.log(h1)
h1.setAttribute("id","elementOne")
h1.setAttribute("class","demo4")
h1.setAttribute("style","text-align:center;background-color:blue;color:white")

// !Read
//getattribute(attribute name)------>which will given  inside the printing statement
console.log(h1.getAttribute("id"))
console.log(h1.getAttribute("class"))
console.log(h1.getAttribute("style"))


// !Update
// setAttribute()---->node.setAttribute("attributename","attribute value")//if the data is  not present it will  create if it is already exist it will update
h1.setAttribute("id","specialElementOne")
h1.setAttribute("style","text-align:center;background-color:blue;color:white;padding:10px 20px;font-family:TimesNewRoman;border-radius:50px")
h1.setAttribute("class","demo2")

console.log(h1.getAttribute("style"))
//!Delete
// removeAttribute(id/class/tagname)
// h1.removeAttribute("id")
// h1.removeAttribute("id")
// h1.removeAttribute("id")
