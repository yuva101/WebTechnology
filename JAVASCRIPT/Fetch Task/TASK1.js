let body=document.body;
let section =document.createElement("section");
let nav=document.createElement("nav");

nav.innerHTML=`
<button class="button">Products</button>
<button class="button">Womens</button>
<button class="button">Mens</button>
<button class="button">Jewellary</button>
<button class="button">Login</button>
`;

nav.style.cssText=`
display:flex;
justify-content:space-evenly;
  background-color:purple;
  height:50px;
  width:1500px;
  padding:5px;
  border-radius:10px;
  gap:20px;

  `;
  

  function changeText(){
    let button =document.getElementById("button")
    if(button==="Womens"){
let women=document.getElementById("button")
women.innerHTML=`
   category:Womens`
    }

  }
    




body.appendChild(nav);

section.style.cssText=`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:10px`;

    body.appendChild(section)


    let displayProducts = async() =>{
        let res=await fetch("./data.json")
        let data=await  res.json();
        console.log(data)

        for(let obj of data.data){
            console.log(obj)
            console.log(obj.title)

            // create article
            let article=document.createElement("article")

            // add text
            article.innerHTML=`
                  <p> <b>Title: </b> ${obj.title}</p>
                  <p> <b>Price: </b> ${obj.price}</p>
                  <p> <b> Category:</b> ${obj.category}</p>
                  <p> <img src="${obj.image}"  height="150px" /></p>
                  `;

             article.style.cssText=`
                  border:0.5px solid gray;
                  width:400px;
                 height:300px;
                 padding:10px;
                border-radius:10px
                `;

              console.log(article)


            //append into the body
                         section.append(article)
        }
    }
    displayProducts();

