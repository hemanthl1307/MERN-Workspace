//Question-1
let arr=[10,20,30,40,50]
let ans=arr.every((el)=>el%10==0);
console.log(ans);
//Question-2
function Findmin(arr)
{
let ans=arr.reduce((min,el)=>{
if(el>min)
{
    return min;
}else{
    return el;
}
});
return ans;
}
arr1=[-5,10,20,5,0,-6,-4];
console.log(Findmin(arr1));
//QUestion-3
let array=[1,2,3,4,5];
array=array.map((el)=>(el*el));
let sum=array.reduce((res,el)=>{
    return res+el;
});
console.log(sum/array.length);
//Qustion-4
 let arr2=[1,2,3,4,5];
 let newarr=arr2.map((el)=>(el+5));
 console.log(newarr);
 //Question-5
let ori=["tom","bob","tony","bruce"];
let uparray=ori.map((el)=>el.toUpperCase());
console.log(uparray);
//QUestion-6
const obj1={
    name1:"hemanth",
    branch1:"DS"
}
const obj2={
     name2:"karan",
    branch2:"IOT",
}
function Mergeobjects(obj1,obj2)
{
    return newobj={...obj1,...obj2};
}
console.log(Mergeobjects(obj1,obj2));
//Question-7
let doubleAndReturnArgs=(arr,...args)=>[
    ...arr,...args.map((el)=>el*2)
];
console.log(doubleAndReturnArgs([1,2,3],4,5));
