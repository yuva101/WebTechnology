// !EVENTS ON ADD EVENT LISTENER
 
let body=document.body;
// create section tag
let section=document.createElement("section")

// creating  div tags for rainbow colors
 let red=document.createElement("div")
 let orange=document.createElement("div")
 let yellow=document.createElement("div")
 let green=document.createElement("div")
 let blue=document.createElement("div")
 let indigo=document.createElement("div")
 let violet=document.createElement("div")

//  append all div into section tag
section.append(red,orange,yellow,green,blue,indigo,violet)

// append section tag into body
body.append(section)
console.log(section)

// apply css
section.style.cssText=`
height:100vh;
width:100vw;
border:solid;
display:flex;`
;

red.style.cssText=`border:solid white;background-color:white;flex:1`;
orange.style.cssText=`border:solid white;background-color:white;flex:1`;
yellow.style.cssText=`border:solid white;background-color:white;flex:1`;
green.style.cssText=`border:solid white;background-color:white;flex:1`;
blue.style.cssText=`border:solid white;background-color:white;flex:1`;
indigo.style.cssText=`border:solid white;background-color:white;flex:1`;
violet.style.cssText=`border:solid white;background-color:white;flex:1`;

// apply mouseover events
red.addEventListener("mouseover", ()=>{
    console.log("hover on red box")
red.style.cssText=`border:solid red;background-color:red;flex:1;transition:2s`; 
})

orange.addEventListener("mouseover", ()=>{
    console.log("hover on orange box")
red.style.cssText=`border:solid orange;background-color:orange;flex:1;transition:2s`; 
})

yellow.addEventListener("mouseover", ()=>{
    console.log("hover on yellow box")
yellow.style.cssText=`border:solid yellow;background-color:yellow;flex:1;transition:2s`; 
})

green.addEventListener("mouseover", ()=>{
    console.log("hover on green box")
green.style.cssText=`border:solid green;background-color:green;flex:1;transition:2s`; 
})

blue.addEventListener("mouseover", ()=>{
    console.log("hover on blue box")
blue.style.cssText=`border:solid blue;background-color:blue;flex:1;transition:2s`; 
})

indigo.addEventListener("mouseover", ()=>{
    console.log("hover on indigo box")
indigo.style.cssText=`border:solid indigo;background-color:indigo;flex:1;transition:2s`; 
})

violet.addEventListener("mouseover", ()=>{
    console.log("hover on violet box")
violet.style.cssText=`border:solid violet;background-color:violet;flex:1;transition:2s`; 
})


// apply mouseout events

red.addEventListener("mouseout", ()=>{
    console.log("hover on red box")
red.style.cssText=`border:solid white;background-color:white;flex:1;transition:2s`; 
})

orange.addEventListener("mouseout", ()=>{
    console.log("hover out on orange box")
red.style.cssText=`border:solid white;background-color:white;flex:1;transition:2s`; 
})

yellow.addEventListener("mouseout", ()=>{
    console.log("hover out on yellow box")
yellow.style.cssText=`border:solid white;background-color:white;flex:1;transition:2s`; 
})

green.addEventListener("mouseout", ()=>{
    console.log("hover out on green box")
green.style.cssText=`border:solid white;background-color:white;flex:1;transition:2s`; 
})

blue.addEventListener("mouseout", ()=>{
    console.log("hover  out on blue box")
blue.style.cssText=`border:solid white;background-color:white;flex:1;transition:2s`; 
})

indigo.addEventListener("mouseout", ()=>{
    console.log("hover out on indigo box")
indigo.style.cssText=`border:solid white;background-color:white;flex:1;transition:2s`; 
})

violet.addEventListener("mouseout", ()=>{
    console.log("hover out on violet box")
violet.style.cssText=`border:solid white;background-color:white;flex:1;transition:2s`; 
})