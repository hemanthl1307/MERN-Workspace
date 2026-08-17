//functions in JS
//1.without arguments
function Printname()
{
    console.log("Hemanth");
}
Printname();
Printname();
Printname();
Printname();
Printname();

function Print1to5(){
    for(let i=1;i<=5;i++)
    {
        console.log(i);
    }
}
Print1to5();

function isAdult()
{
    let age=18;
    if(age>=18)
    {
        console.log("adult");
    }
    else{
        console.log("not a adult");
    }
}
isAdult();


//2.function with arguments
function PrintInfo(name,age)
{
    console.log(`${name}'s age is ${age}`);
}
PrintInfo("hemanth",19);
PrintInfo("hemanth");
PrintInfo(19);
function Sum(a,b)
{
    console.log(a+b);
}
Sum(2,4);
Sum(45632,7414852);
//function with return 
function sum(a,b)
{
    return a+b;
}
console.log(sum(5,5));

function isadult(age)
{
    if(age>=18)
    {
        return "adult";
    }
    else{
        return "not adult";
    }
}
console.log(isadult(10));
//scope 
//1.function scope
function calmul(a,b)
{
    let mul=a*b;
    return mul;
}
console.log(calmul(2,4));
console.log(mul);//error as mul is not accessable/visible here
//2.global scope
let sum=50;//global variable
function findsum(a,b)
{
    let sum=a+b; //function scope 
    //this sum has high specificity than global sum 
    //first preference to function sum then to the global sum---->inside function
    console.log(sum);
}
findsum(2,4);
console.log(sum);//50 
//3.Block scope
{
    let  a=20;
    var  b=10
}
console.log(a); //a is not defined here
console.log(b); //we can access b since we declare dusing var 
for(let j=0;j<=5;j++)
{
    console.log(j);
}
console.log(j); //j is not defined here
//4.Lexical scope
function outerfunc()
{
    let x=5;
    let y=6;
    function innerfunc()
    {
        // console.log(x);
        // console.log(y);
    }
    innerfunc();
}
outerfunc();
//inner func can access outer variable
// function outerfunc()
// {
//     console.log(x);
//     console.log(y);
//     function innerfunc()
//     {
//         let x=5;
//         let y=6;
//     }
//     innerfunc();
// }
// outerfunc();
//the above gives error 
//outer func cannot access inner variable
//function expression
let info=function(name,age,branch)
{
    console.log(`Hi ${name} you are ${age} years old from ${branch} branch`);
}
info("Hemanth",19,"CSE-DS");
info("lokesh",20,"CSE-AIML");
info=function(a,b)
{
    let sum=a+b;
    console.log(sum);
}
info(2,4);
// info("lokesh",20,"CSE-AIML");
// Higher order function
function MultipleGreet(func,count)
{
    for(let i=1;i<=count;i++)
    {
        func();
    }
}
MultipleGreet(
    function greet()
{
    console.log("hemanth");
},10);
//Or 
let greet=function()
{
    console.log("hello");
}
MultipleGreet(greet,5);
//higher order function with return 
function EvenOddFactory(request)
{
    if(request=="odd")
    {
        return function odd (n)
        {
            console.log(!(n%2==0));
        }
    }
    else if(request=="even")
    {
        return  function (n)
        {
            console.log(n%2==0);
        }
    }
    else{
        console.log("wrong request");
    }
}
let func=EvenOddFactory("even");
func(5);
func(4);
func(10);
//Methods 
const calculator=
{
    add:function (a,b)
    {
        return a+b;
    },
    sub:function(a,b)
    {
        return a-b;
    },
    mul:function(a,b)
    {
        return a*b;
    }
}
console.log(calculator);
console.log(calculator.add);
console.log(calculator.add(2,4));
console.log(calculator.sub(10,4));
console.log(calculator.mul(5,2));
//method shorthand
const calculator=
{
    add (a,b)
    {
        return a+b;
    },
    sub(a,b)
    {
        return a-b;
    },
    mul(a,b)
    {
        return a*b;
    }
}
console.log(calculator.add(2,4));
console.log(calculator.sub(10,4));
console.log(calculator.mul(5,2));
