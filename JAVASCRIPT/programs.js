// input:"Bobby Deol"
// output:{B:1,o:2,b:2,y:1,D:1,e:1,l:1}
// let s="Bobby Deol";
// let result={};
// for(let char of s){
//     console.log(char);
// if(result.hasOwnProperty(char)==true){
// result[char]+=1;
// }
// else{
// result[char]=1;

// }
// }
// console.log(result)

// input:{4,2,4,3,5,4,5,1,6,3}
// output:{4,4,4,5,5,3,3,1,2,6}
let a=[4,2,4,3,5,4,5,1,6,3]
let res={}
for (let num of a){
    res[num]=(res[num]||0)+1;
}
// frequency by descending thenn by  first occurence
let output=[...a].sort((x,y)=>{
    if(res[y]===res[x]){
        return a.indexOf(x)-a.indexOf(y) //maintain order if frequency is same
    }
    return res[y]-res[x];
})
console.log(output)