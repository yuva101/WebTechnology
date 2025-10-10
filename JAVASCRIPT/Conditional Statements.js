var  a=10;
var  b=20;
// if statement
if(a>b ){
    console.log("true");
}

//else statement
if(b>a){
    console.log(b);

}
else{
    console.log(a);
}

//nested if
 if(b>a)
 {
    if(a>b){
        console.log(a);
    }
    else{
        console.log(b)
    }

 }
 else{
console.log(" b is greatest")
 }

 //Elseif statements
 var a= 100;
 var b= 500;
 var c=250;
 if(a>b){
    console.log("a is largest number");
 }
 else if(b>a){
    console.log("b is largest");
 }
 else
    {
    console.log("c is largest");
 }

//  Switch
var a=2;
switch(a){
    case 1:
    console.log("January")
    break;
    case 2:
        console.log("February")
      break;
    case 3:
    console.log("march");
break;
    
    
    }