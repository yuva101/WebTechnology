// !PROMISE
 let p=new Promise((resolve,reject)=>{
let API_request=true;
if(API_request==true){
    resolve([
        {empName:"yuva" ,role:"Java Developer",Sal:"12 LPA"},
        {empName:"Deva" ,role:"Web Developer",Sal:"12 LPA"},
        {empName:"Vishnu" ,role:"JS Developer",Sal:"12 LPA"},
        {empName:"Nisha" ,role:"React Developer",Sal:"12 LPA"},
        {empName:"Swasthi" ,role:" CSS Developer",Sal:"12 LPA"}
    ]);
}
else{
    reject("Something went wrong");
}
 });
 console.log(p);

//  Promise Instance method
p.then(data=>{
    console.log(data)
    console.log("I am then method ")
});

 p.catch(err=>{
    console.log(err)
    console.log("I am err method")
 });

 p.finally(()=>{
    console.log("I am finally method")
 });