//array methods
//1.forEach
let arr=[1,2,3,4,5];
//method-1
function printarr(el)
{
    console.log(el);
}
arr.forEach(printarr);
//method-2
arr.forEach(function print(el)
{
    console.log(el);
});
//method-3
arr.forEach((el)=>{
    console.log(el);
})
const classInfo=[
    {
        name:"Hemanth L",
        phy:25,
        chem:22,
        maths:25
    },
    {
        name:"Lokesh",
        phy:20,
        chem:21,
        maths:25
    }
];
classInfo.forEach((info)=>
{
    console.log(info.name,info.phy,info.chem,info.maths);
})
//2.Map
let arr=[1,2,3,4,5,6,7]
let newArr=arr.map((el)=>{
    return el*2;
})
console.log(newArr);
let avg=classInfo.map((el)=>{
    sum=el.phy+el.chem+el.maths;
    return sum/3;
})
console.log(avg);
//3.Filter
let arr=[2,4,3,8,16,15,6,9,12,10];
let newarr=arr.filter((el)=>(el%3==0
))
console.log(newarr);
let arr1 = [5, 12, 7, 20, 3, 18, 9, 25, 30];
let greater=arr1.filter((el)=>
{
    return el>10;
})
console.log(greater);
//4.Every
let arr2=[2,4,6,1];
console.log(arr2.every((el)=>(el%2==0)));
let newarr1=[2,4,6,8].every((el)=>(el%2==0));
console.log(newarr1);
let newarr2=[1,3,5,7].every((el)=>(el%2!=0));
console.log(newarr2);
//5.Some
let arr2=[1,3,2];
console.log(arr2.some((el)=>(el%2==0)));
let newarr1=[2,4,6,8,1,3,7,11,15].some((el)=>(el%2==0));
console.log(newarr1);
let newarr2=[1,3].some((el)=>(el%2==0));
console.log(newarr2);
//6.Reduce function
let arr=[1,2,3,4,5];
let ans=arr.reduce((res,el)=>{
    return res+el;
})
console.log(ans);
let res=arr.reduce((res,el)=>{
    return res+el*2;
})
console.log(res);
let arr1=[5,10,25,69,15,8];
let max=arr1.reduce((max,el)=>
{
    if(el>max)
    {
        return el;
    }else{
        return max;
    }
})
console.log(max);
let arr2=[10,25,30,15,20];
let ans=arr2.reduce((sum,el)=>{
    return sum+el;
})
console.log(ans/arr2.length);
//default parameter
function sum(a,b=2)
{
    return a+b;
}
console.log(sum(2,5));
console.log(sum(2));
function sum(a=2,b=5)
{
    return a+b;
}
console.log(sum());
console.log(sum(5));
//spread method
let arr=[5,80,15,20];
console.log(Math.max(arr)); //output will be NaN because Math.max wants separate values
console.log(Math.max(...arr));
console.log(...arr);
console.log("LokeshLakshmi");
console.log(..."LokeshLaksmi");
//spread with array literal
let chars=[..."hemanth"];
console.log(chars);
let odd=[1,3,5,7];
let even=[2,4,6,8];
let nums=[...odd,...even];
console.log(nums);
//spread with object literal
const data={
    email:"hemanth1307@gmail.com",
    password:"abcd"
};
console.log(data);
const copydata={...data};
console.log(copydata);
const newdata={...data,country:"India",id:1234};
console.log(newdata);
let arr=[5,10,15,20,25];
let obj={...arr};
let str="hemanth";
let obj1={...str};
console.log(obj);
console.log(obj1);
//Rest method
function print(a,b,c,d)
{
    console.log(a,b,c,d);
}
print(1,2,3,4);
//using rest
function print(...args)
{
    console.log(args);
}
print(1,2,3,4);
function sum(...args)
{
    return args.reduce((sum,el)=>sum+el);
}
console.log(sum(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15));
function test()
{
    console.log(arguments);
}
test(1,2,3,4,5);
function min(msg,...values)
{
    console.log(msg);
    return values.reduce((min,el)=>{
        if(el>min)
        {
            return min;
        }else{
            return el;
        }
    });
}
console.log(min("rest",1,2,3,4,5));
//Destructuring
let names=["tony","bruce","peter","steve"];
let[winner,runnerup,secrunnerup]=names;
console.log(winner);
console.log(runnerup);
console.log(secrunnerup);
console.log(winner); //prints tony only does not print steve
let[winner,runnerup,...others]=names;
console.log(winner);
console.log(runnerup);
console.log(others);
console.log(winner);
//Destructuring object
const student={
    name:"karan",
    age:14,
    class:10,
    subjects:["kannada","english","math","science"],
    username:"karan@123",
    password:"karan_2006",
    // city:"bangalore"
};
console.log(student.username);
console.log(student.password);
let{username,password}=student;
console.log(username);
console.log(password);
let{user,pass}=student
console.log(user,pass);
//the above code gives undefined because the variable name should be same as in object
//so to overcome that
let{username:user,password:pass}=student;
console.log(user);
console.log(pass);
//using this also creates a error always use the name given after variable:.... in this case
console.log(username);
console.log(password);
let{username:user,password:pass,city="karnataka"}=student;
let{username:user,password:pass,city:place="karnataka"}=student;
console.log(place);





