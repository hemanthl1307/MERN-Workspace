//Arrays in JS
let num=[2,4,6,8];
console.log(num);
let student=["hemanth","lokesh","lakshmi"];
console.log(student);
console.log(student[0]);
console.log(student[1]);
console.log(student[2]);
console.log(student[0][0]);
console.log(student[0][1]);
console.log(student[0].length);
console.log(num[0]);
console.log(num[0][0]);
console.log(num[0].length);
console.log(typeof num);
let info=["hemanth",19,9.61]
console.log(info[0]);
console.log(info[1]);
let empty=[];
console.log(empty);
empty[0]="apple";
empty[1]="mango";
empty[2]="banana";
console.log(empty);
//strings are immutable
let name="rohit";
name[0]="m";
console.log(name);
//arrays are mutable
let names=["rohit","hemanth","lokesh"];
names[1]="hemu";
console.log(names);
names[0]="mohit";
console.log(names);
names[5]="lakshmi";
console.log(names);
console.log(names[4]);
console.log(names[5]);
console.log(names.length);
// array methods
let arr=["apple","mango","banana","grapes"];
console.log(arr);
//push
arr.push("litchi");
console.log(arr);
arr.push("pinapple");
console.log(arr);
//pop
arr.pop();
console.log(arr);
//unshift
arr.unshift("guava");
console.log(arr);
//shift
arr.shift();
console.log(arr);
// //indexOf
console.log(arr.indexOf("apple"));
console.log(arr.indexOf("mango"));
console.log(arr.indexOf("dragonfruit"));
// //includes
console.log(arr.includes("apple"));
console.log(arr.includes("banana"));
console.log(arr.includes("greenapple"));
// //concat
let arr1=["red","blue","green"];
let arr2=["white","gold","silver"];
console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1));
console.log(arr1);
console.log(arr2);
// //reverse
let alpha=['d','c','b','a'];
console.log(alpha.reverse());
// //slice
let arr3=["red","blue","green","black","white"];
console.log(arr3);
console.log(arr3.slice(0,2));
console.log(arr3.slice());
console.log(arr3.slice(2));
console.log(arr3.slice(-1));
console.log(arr3.slice(-2));
//splice
let arr4=["red","blue","green","black","white","pink"];
console.log(arr4);
console.log(arr4.splice(5))//deletes 5th index element ----->arr4.splice(start)
console.log(arr4);
console.log(arr4.splice(1,2));//start from 1st index and deletes 2 elements ------->arr4.splice(start,end)
console.log(arr4);
console.log(arr4.splice(0,1,"dark red"));//start from 0th index and delete 1 element and insert dark red to the 0th index
console.log(arr4);
console.log(arr4.splice(0,0,"grey"));//start at 0th index delete 0 and add grey at 0th index
console.log(arr4);
console.log(arr4.splice(1,0,"red","orange","purple"));// start at 1st index delete 0 and add everyting at 0h index
console.log(arr4);
console.log(arr4.splice(4,1,"magenta"));  //start at 4th index delete 1 element and add magenta at 4th index
console.log(arr4);
//sort
let arr5=['a','b','c','d'];
console.log(arr5.sort());
let arr6=["red","blue","green","yellow","xenon"];
console.log(arr6.sort());
let num=[10,5,22,6];
console.log(num.sort());
//array references
let num1=[1];
let num2=[1];
console.log(num1==num2);
let arr=['a','b'];
console.log(arr);
let arrcopy=arr;
console.log(arrcopy);
arrcopy.push('c','d');
console.log(arr);
console.log(arr==arrcopy);
//constant array
const arr7=[1,2,3];
arr7.push(4);
arr7.push(5,6);
console.log(arr7);
arr7.pop();
console.log(arr7);
newarr=arr7; //error
arr7=[1,2,3]; //error
//nested array
let multi=[[1,2],[3,4,5],[6,7,8,9]];
console.log(multi);
console.log(multi.length)
console.log(multi[0]);
console.log(multi[0][0])
console.log(multi[2].length)





