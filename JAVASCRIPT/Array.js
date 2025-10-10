var students=[
    "Yuva", "priyadharhsini","hema","Bawin"

];
console.log(students);
console.log(students[1]);
console.log(students[0]);
//Create.....
//syntax:arrayname[index]=value;
students[1]="Mohan";
students[5]="Dhanushya";

console.log(students)
//Read........
//syntax:arrayname[index]
console.log(students[2])
console.log(students[6])
console.log(students[0])
//update......
//syntax:arrayname[existingindex]=new value;
students[1]="priya";
students[2]="Hemalatha";
console.log(students);
//delete.....
//syntax:delete arrayname[index]--->empty
delete students[5];
console.log(students)



// Methodss....
//?...pop(),push(),shift(),unshift()

var a=[10,20,30,40,50,60,70]
console.log(a)
//?pop()---It will remove the last index element  of array
a.pop();
console.log(a);

//?push()----It will add the element at last index position
a.push(400)
console.log(a);


//?shift()-----It will remove the 0th index  of an element  including null
a.shift()
console.log(a);


//?unshift()----It will  add the 0th index of an element if, it it null the element will be shift
a.unshift(null)
a.unshift(20000)
console.log(a);

//?slice()----It will extract  the sub part of an array

