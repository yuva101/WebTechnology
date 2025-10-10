// WAP to skip the  numbers belongs to 3,5,7 tables
console.log("printing the numbers skipps in 3,5,7")
let z=1;
while(z<=50)
{
    if((z%3==0) || (z%5==0) || (z%7==0))
    {
        z++;
        continue;
    }
    console.log(z);
    z++;
}

//WAP to skip the numbers  belongs to 3 table 

console.log("from 3 table skipsss")
let y=1;
while(y<=10)
{
    if(y%3==0)
    {
        y++;
        continue;
    
    }
    console.log(y);
    y++;
}

// sum of digits
console.log("The sum of the digits");
let x=2432;
let sum=0;
while(x!=0){
   let last_digit=x%10;
    sum=sum+last_digit;
    x=parseInt(x/10);
}
console.log(sum);

// WAP to print the natural numbers from 1 to 5
console.log("natural numbers from 1 to 10")
let num=1;
for (let num=0;num<=5;num++)
{
    console.log(num);
}

//WAP to check  the charecter is vowel or not
console.log("To check Vowel or Not")
let char="A";
char=char.toLowerCase();// it will convert the string into lowercase
if(char=="a" ||char=="e" ||char=="i"||char=="o"||char=="u")
     {
    console.log("Character is vowel");
     }
    else{
        console.log("Character is not a vowel");

    }


    //WAP to check  string contains vowel or not
    console.log("String contains vowel or not")
    // var sname="Devadharshini";
     var sname="bcdjn"
    console.log(sname);
    //to extract the  each character we go for indexing
    console.log(sname[0]);
    console.log(sname[1]);
    console.log(sname[2]);
    console.log(sname[4]);
    console.log(sname[5]);
    console.log(sname[18]);
// to print the data by writing multiple statements we go for loop
for  (let i=0;i<sname.length;i++){
    //checking whether the vowel is there or not
     if(sname[i]=="a"||sname[i]=="e"||sname[i]=="i"||sname[i]=="o"||sname[i]=="u")
    {
        console.log("Yessss.........Vowel is present");
        break;//becoz , i.e string contains vowel or not for this we get the answer on the iteration where we get the 1st vowel afterthat we no need to do iteration 
    }
    else{
        console.log("There is no Vowel is present");
    }
}

//WAP to print the countof Vowels is present in a string
var  StdName="Moon is bloom";
var count=0;
for(let i=0;i<StdName.length;i++)
    {
    if(StdName[i]=="a"||StdName[i]=="e"||StdName[i]=="i")||StdName[o]=="a"||StdName[i]=="u")
     {
count++;
    }
    console.log(count)
}
