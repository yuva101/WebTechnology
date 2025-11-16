let body=document.body;
let section =document.createElement("section");
body.appendChild(section)

section.style.cssText=`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:10px`;


    let displayProducts = async() =>{
        let res=await fetch("https://fakestoreapi.com/products")
        let data=await  res.json();
        console.log(data)

        for(let obj of data){
            console.log(obj)
            console.log(obj.title);

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

