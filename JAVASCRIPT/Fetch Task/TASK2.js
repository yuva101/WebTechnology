let body=document.body

let section=document.createElement("section")
section.style.cssText=`
border:solid;
height:600px;
width:800px;
padding:10px`


body.append(section)




let article=document.createElement("article")
article.innerHTML=`
  `;
article.style.cssText=`
border:solid blue;
height:300px;
width:400px;
padding:10px;
`

let div=document.createElement("div");
div.style.cssText=`
border:solid orange;
heigth:250px;
width:250px;
padding:10px;
`
section.append(div)
section.append(article)

