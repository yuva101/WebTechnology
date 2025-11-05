let body=document.body;
let nav=document.createElement("nav");
 
let homeDiv=document.createElement("div")
homeDiv.innerHTML="Home"

let aboutDiv=document.createElement("div")
aboutDiv.innerHTML="About"

let contactDiv=document.createElement("div")
contactDiv.innerHTML="Contact"

let LoginDiv=document.createElement("div")
LoginDiv.innerHTML="Login"

// nav.append(homeDiv)
// nav.append(aboutDiv)
// nav.append(contactDiv)
// nav.append(LoginDiv)
nav.append(homeDiv,aboutDiv,contactDiv,LoginDiv)
body.append(nav);

console.log(nav)
console.log(homeDiv)
console.log(aboutDiv)
console.log(contactDiv)
console.log(LoginDiv)

// ! CREATE
// ?node.style.setproperty("propertyName","propertyValue")
nav.style.setProperty("border","solid red")
homeDiv.style.setProperty("border","solid blue")
nav.style.setProperty("text-align","center")

aboutDiv.style.setProperty("border","solid blue")
contactDiv.style.setProperty("border","solid blue")
LoginDiv.style.setProperty("border","solid blue")

// ?node.style.propertyName=value;
// nav.style.border="solid red"
// homeDiv.style.border-"solid blue"
// aboutDiv.style.border-"solid blue"
// LoginDiv.style.border-"solid blue"
// contactDiv.style.border-"solid blue"

// !READ
console.log(nav.style.getPropertyValue("border"))
console.log(nav.style.getPropertyValue("display"))
console.log(nav.style.getPropertyValue("text-align"))
console.log(homeDiv.style.getPropertyValue("border"))
console.log(homeDiv.style.getPropertyValue("padding"))
console.log(homeDiv.style.getPropertyValue("background-color"))


// !UPDATE
nav.style.cssText=`border:solid brown`;
       

// !DELETE
nav.style.cssText=""
homeDiv.style.removeProperty("text-align");