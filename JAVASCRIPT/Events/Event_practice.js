
// ! EVENTS ON HTML ATTRIBUTES
let body=document.body

function greet(){
console.log("heyyyyyyyyyyyy")
}

let h1Tag=document.getElementById("h1Tag")
function applyColor(){
    h1Tag.style.cssText=`background-color:crimson`
}
function removeColor(){
    h1Tag.style.cssText=``  // we can use remove property or ` `
    }

function addNewBox(){
    let addBtn=document.getElementById("addBtn")
    console.log(addBtn)
    //create p tag
    let p=document.createElement("p")
    //addText
    p.innerHTML="I am  a new Product"

    // add css
    p.style.cssText=`
    text-align:center;
    padding:10px;
    border:solid;
    background-color:teal;
    color:white`

    // push into body
    body.appendChild(p);
}