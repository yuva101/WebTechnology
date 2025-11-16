// ?Example 1
function getData(path_address){
fetch(path_address).then((response)=>{
    console.log("i am  then method fetch promise")
    // console.log(response.json());
    response.json().then((data)=>{
    // console.log("I am then method of readable promise")
    console.log(data)
});
    });
}
getData("./Data.json")
getData("./Products.json")
getData("./UserData.json")

// ?Example 2 Promises way 
// To reduce the code we remove the block and paranthesis
function getData(path_address){
fetch(path_address).then(response=>
    response.json().then(data=>console.log(data)))}
getData("./Data.json")
getData("./Products.json")
getData("./UserData.json")
getData("https://fakestoreapi.com/products ")
getData("https://dog.ceo/api/breeds/image/random")