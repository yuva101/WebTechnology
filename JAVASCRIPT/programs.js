// input:"Bobby Deol"
// output:{B:1,o:2,b:2,y:1,D:1,e:1,l:1}
let s="Bobby Deol";
let result={};
for(let char of s){
    console.log(char);
if(result.hasOwnProperty(char)==true){
result[char]+=1;
}
else{
result[char]=1;

}
}
console.log(result)