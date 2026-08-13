//String practise Questions
//Question-1
let msg="help!";
console.log(msg.trim().toUpperCase());
//Question-2
let name="ApnaCollege";
console.log(name.slice(4,9));//college
console.log(name.indexOf("na"))//2
console.log(name.replace("Apna","Our"));//OurCollege
//Question-3
let newname=name.slice(4);
console.log(newname);
console.log(newname.replace("l","t"));
//OR
console.log(name.slice(4).replace("l","t").replace("l","t"));
//Array practise questions
//Question-1
let start=['january','july','march','august'];
// method-1
start.shift();
start.shift();
start.unshift("july");
start.unshift("june");
console.log(start);
//method-2
console.log(start);
start.splice(0,1);
console.log(start);
start.splice(1,0,"june");
console.log(start);
//Question-2
let arr=['c','c++','html','javascript','python','java','c#','sql'];
console.log(arr.reverse().indexOf("javascript"));
//Question-3
let arr=[['X',null,"O"],[null,"X",null],["O",null,"X"]];
console.log(arr);
//Question-4
let array=[7,9,0,-2];
let n=prompt("Enter n");
console.log(array.slice(0,n));
//question-5
let array=[7,9,0,-2];
let n=prompt("Enter n");
console.log(array.slice(-n));
//question-6
let str=prompt("Enter a string");
if(str.length==0)
{
    console.log("string is empty");
}
else{
    console.log("string is not empty");
}
//question-7
let str=prompt("Enter string");
let n=prompt("Enter n");
if(str[n]==str[n].toLowerCase())
{
    console.log("The character is lowercase");
}
else {
    console.log("character is uppercase");
}
//question-8
let str=prompt("Enter a string");
console.log(str.trim());
//Question-9
let arr=[2,4,6,8];
if(arr.includes(8)){
    console.log("Element exists in array");
}
else {
    console.log("Element does not exists in the array");
}
