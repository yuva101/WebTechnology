let p=window.fetch("./JSONdata.JSON");
p.then((Response)=>{
Response.json().then((val=>{
    console.log(val)
}))
})