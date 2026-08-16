//functions in JS
//1.without arguments
// function Printname()
// {
//     console.log("Hemanth");
// }
// Printname();
// Printname();
// Printname();
// Printname();
// Printname();

// function Print1to5(){
//     for(let i=1;i<=5;i++)
//     {
//         console.log(i);
//     }
// }
// Print1to5();

// function isAdult()
// {
//     let age=18;
//     if(age>=18)
//     {
//         console.log("adult");
//     }
//     else{
//         console.log("not a adult");
//     }
// }
// isAdult();


//2.function with arguments
// function PrintInfo(name,age)
// {
//     console.log(`${name}'s age is ${age}`);
// }
// PrintInfo("hemanth",19);
// PrintInfo("hemanth");
// PrintInfo(19);
// function Sum(a,b)
// {
//     console.log(a+b);
// }
// Sum(2,4);
// Sum(45632,7414852);
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