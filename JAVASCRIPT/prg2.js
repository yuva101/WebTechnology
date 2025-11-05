// ?print the zeros in front of the string
// let n=679340000983748;
// console.log(n);
//  let s=n.toString();
//  console.log(s);
//  let res="";
//  for( let char of s){
//     if(char==0){
//         res=char+res;
//     }
//     else{
// res=res+char;
//     }
//  }
//  console.log(res)


// ?without +
// let n=47309000083728;
// console.log(n)
// let s=n.toString().split("").sort().join("")
// console.log(s)

// ?intersection
// let a=[1,2,3,4]
// let b=[8,2,3,5]
// let res=[];
// for(let i of a)
//     {
//     console.log(i)
// for(let j of b)
//     {
// console.log(j)
// if(i==j){
//     res.push(i)
// }
//     }
// }
//    console.log(res);


// ?another method because of so much of iteration
// let a=[1,2,3,4]
// let b=[2,3,4,5]
// let res=[]
// for(let i of a){
//     // console.log(i)
//     if(b.includes(i))
//         {
// res.push(i)
//     }
// }
// console.log(res)


// ?to check palindrome or not
// let a=545
// console.log(a)
//  let res=a.toString().split("").reverse().join("");
// console.log(res)


// //?to check palindrome ranges

// let res=""
// for (let  num=1;num<=100;num++){
//  let res=num.toString().split("").reverse().join("");
// //  console.log(res)
// if(num==res){
//     console.log(num)
// }
// }

// ?pattern
// *****
// *****
// *****
// *****
// *****
// let pattern=""
// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++){
//     pattern +="*";
//     }
//     pattern+="\n"
// }
//         console.log(pattern);


// 12345
// 2345
// 345
// 45
// 5
for (let i = 0; i < 5; i++) {
    let line = "".repeat(i); // Add leading spaces for alignment (optional)
    for (let j = i + 1; j <= 5; j++) {
        line += j;
    }
    console.log(line);
}

