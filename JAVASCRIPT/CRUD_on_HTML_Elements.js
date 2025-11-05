// !CREATE
// 3 steps
/*-1.createElement()----->To create an element
-2.textContent/innerText/innerHTML ----->To add the content in an element
// ?diff b/w innerText/innerHTML/textContent
      textcontent and innerText will consider only text 
      innerHTML---will consider HTML elements also within the ""
-3.append()/appendChild()----->It will push the element into the container or DOM Tree
     appendChild(node)--->only it accepts element inside the ()
     append(String/node)--->It accepts  both the  String & element inside the ()
        ---container.append(node)---> node==element/tag 
        ---container.appendChild(node) */
// ?by targeting parent node we have 3 methods as of now id,class is specified -->tagname,querySelector,querySelectorAll
    let body=document.querySelector("body")
    console.log(body)

// ^step1:create Element
    let h1=document.createElement("h1")
    // console.log(h1)
    // ^step2:Add the text
    h1.textContent="Welcome to the Computer world"
    h1.innerText="Welcome to the  Job Searching"
    h1.innerHTML="When will  you <u>get placed</u>"

    let p=document.createElement("p")
    p.textContent="Getting Fully depressed thinking about job"
// ^step3: push the element into the DOM tree
body.append(h1)
body.appendChild(p)
 body.append("No soon I will get a job")
console.log(h1)
console.log(p)

// !READ
// refer the  DOM Selectors



// !UPDATE
// ?1)content update--- It replaces only the content
// For this we use innerHTML/innerText/textContent
// ?2)Element update--- It replaces the tag too
// container.replaceChild(new node,old node)---->It will  update the element in the container with new element.

h1.innerHTML="Getting Succeed in your life is More Important "
let h5=document.createElement("h5")
h5.innerHTML ="<i><u>I will get placed sooonn</u></i>"
// console.log(h1)
body.replaceChild(h5,h1)

// !DELETE
body.removeChild(p)
body.removeChild(h5)

