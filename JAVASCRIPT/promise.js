// var a=10;
// var sname="yuvapriya";
// var students=["yuvapriya","bharath","hemanth","bawin","harish"];
// let p=new Promise((resolve,reject)=>{
//     let isPlaced=true;
//     if(isPlaced){
//         console.log("Yes, Yuvapriya is placed")
//         resolve("done")
//     }
//     else{
//         console.log("No,Barath is still trying")
//         reject("not done");
//     }
// });
// console.log(p);
// p.then(data=>{
//     console.log(data,"Yes i will get the data")
// })
// p.catch(err=>{
//     console.log(err,"Something went wrong");

// })
// p.finally(()=>{
//     console.log("Promises will wrok perfect");
// })



let p=new Promise((resolve,reject)=>
    {
    let API_Request=true;
    if(API_Request){
        resolve([
            {sname:"yuvapriya",age:21,course:"JFS"},
            {sname:"bawin",age:20,course:"JFS"},
            {sname:"barath",age:22,course:"JFS"},
            
        ]) }
        else{
            reject("Something is went wrong");
        }
    }
);
console.log(p);


p.then((resolve)=>{
    console.log(resolve,"yes I got")
})
p.catch((reject)=>{
    console.log(reject,"no I got")
})
p.finally(()=>{
    console.log("yes  I learn")
})