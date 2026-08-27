//call stack in JS
// function hello()
// {
//     console.log("Inside Hello fnx");
//     console.log("Hello");
//     console.log("leaving hello fnx");
// }
// function demo()
// {
//     console.log("Inside demo fnx,calling hello");
//     hello();
//     console.log("finished calling hello,leaving demo");
// }
// console.log("calling demo fnx");
// demo();
// console.log("done!,bye");

// function one()
// {
//     return 1;
// }
// function two()
// {
//     return one()+one();
// }
// function three()
// {
//     debugger;
//     let ans=two()+one();
//     console.log(`answer is ${ans}`);
// }
// three();

//Js is single threaded
//synchronous nature of code 
// let a=10;
// console.log(a);
// let b=20;    
// console.log(b);
// console.log(a+b);
//asynchronous nature of code
// setTimeout(()=>{
//     console.log("Hello after 1s");
// },1000);
// console.log("hello...");
//callback--hell
let h1=document.querySelector("#head");
// setTimeout(()=>{
//     h1.style.color="red";
// },1000);
// setTimeout(()=>{
//     h1.style.color="magenta";
// },2000);
// setTimeout(()=>{
//     h1.style.color="yellow";
// },3000);
// setTimeout(()=>{
//     h1.style.color="green";
// },4000);
// setTimeout(()=>{
//     h1.style.color="blue";
// },4000);
//insted of this we can make it more simpler
// function changecolor(color,delay)
// {
//     setTimeout(()=>{
//         h1.style.color=color;
//     },delay);
// }
// changecolor("red",1000);
// changecolor("green",2000);
// changecolor("yellow",3000);
// changecolor("magenta",4000);
// changecolor("blue",5000);
//insted of this also we can use nesting callback so that once after red is done only next color gets executed and so on
//this type of situation arises in API,Database and many situation where we should use nesting callbacks
//this is asynchronous behaviour of JS to overcome this we have promises
// function changecolor(color,delay,changenextcol)
// {
//     setTimeout(()=>{
//         h1.style.color=color
//         if(true)
//         {
//             changenextcol();
//         }
//     },delay);
// }
// changecolor("red",500,()=>{
//     changecolor("yellow",1000,()=>{
//         changecolor("green",1500,()=>{
//             changecolor("magenta",2000,()=>{
//                 changecolor("blue",2500,()=>{
//                     changecolor("orange",3000);
//                 });
//             });
//         });
//     });
// });
//call back hell real world database example
function storeDB(data,success,failure)
{
    let internetspeed=Math.floor(Math.random()*10)+1;
    if(internetspeed>4){
        success(data);
    }else{
        failure();
    }
}
storeDB("hemanth",(data)=>
    {console.log("success1:data1 inserted succesfully",data);
    storeDB("lokesh",(data)=>
        {console.log("success2:data2 inserted succesfully",data)
        storeDB("lakshmi",(data)=>
            {
                console.log("success3:data3 inserted succesfully",data)
            },
        ()=>{
            console.log("failure3:weak connection,data cannot be inserted");
        });
        }
        ,()=>{
            console.log("failure2:weak connection,data cannot be inserted");
            });
        },
        ()=>{console.log("failure1:weak connection,data cannot be inserted");
});
//this is called as call back hell if data 1 is successfully inserted then only next data is inserted so 
//so this is called callback hell where one callback is passed to another and so on..
//insted of this we use promises