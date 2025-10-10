let p= new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve("problem resolved");

    })
// reject("it is rejected")

})
async  function getData(){
    console.log("beforre promises")
    let res=await p;
    console.log(res)
    console.log("after promises")
}
getData();