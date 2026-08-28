//call stack in JS
function hello()
{
    console.log("Inside Hello fnx");
    console.log("Hello");
    console.log("leaving hello fnx");
}
function demo()
{
    console.log("Inside demo fnx,calling hello");
    hello();
    console.log("finished calling hello,leaving demo");
}
console.log("calling demo fnx");
demo();
console.log("done!,bye");

function one()
{
    return 1;
}
function two()
{
    return one()+one();
}
function three()
{
    debugger;
    let ans=two()+one();
    console.log(`answer is ${ans}`);
}
three();

//Js is single threaded
//synchronous nature of code 
let a=10;
console.log(a);
let b=20;    
console.log(b);
console.log(a+b);
//asynchronous nature of code
setTimeout(()=>{
    console.log("Hello after 1s");
},1000);
console.log("hello...");
//callback--hell
let h1=document.querySelector("#head");
setTimeout(()=>{
    h1.style.color="red";
},1000);
setTimeout(()=>{
    h1.style.color="magenta";
},2000);
setTimeout(()=>{
    h1.style.color="yellow";
},3000);
setTimeout(()=>{
    h1.style.color="green";
},4000);
setTimeout(()=>{
    h1.style.color="blue";
},4000);
//insted of this we can make it more simpler
function changecolor(color,delay)
{
    setTimeout(()=>{
        h1.style.color=color;
    },delay);
}
changecolor("red",1000);
changecolor("green",2000);
changecolor("yellow",3000);
changecolor("magenta",4000);
changecolor("blue",5000);
//insted of this also we can use nesting callback so that once after red is done only next color gets executed and so on
//this type of situation arises in API,Database and many situation where we should use nesting callbacks
//this is asynchronous behaviour of JS to overcome this we have promises
function changecolor(color,delay,changenextcol)
{
    setTimeout(()=>{
        h1.style.color=color
        if(true)
        {
            changenextcol();
        }
    },delay);
}
changecolor("red",500,()=>{
    changecolor("yellow",1000,()=>{
        changecolor("green",1500,()=>{
            changecolor("magenta",2000,()=>{
                changecolor("blue",2500,()=>{
                    changecolor("orange",3000);
                });
            });
        });
    });
});
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
//---------------using promises-----------------
function savetoDB(data)
{
    return new Promise((resolve,reject)=>{
        let internetspeed=Math.floor(Math.random()*10)+1;
        if(internetspeed>4)
        {
            resolve(`success: ${data} inserted succesfully`);
        }else{
            reject(`failure: ${data} failed to insert`);
        }
    });
}
console.log(savetoDB("Hemanth"));

//using .then and .catch in promises
let request=savetoDB("Hemanth");
console.log(request);
request.then(()=>{
    console.log("promise was fulfilled");
    console.log(request);
})
.catch(()=>{
    console.log("promise was rejected");
    console.log(request);
});
//promise chaining
savetoDB("hemanth").then(()=>{
    console.log("data1 saved");
    return savetoDB("lokesh");
})
.then(()=>{
    console.log("data2 saved");
    return savetoDB("lakshmi");
})
.then(()=>{
    console.log("data3 saved");
    return savetoDB("chikamma");
})
.then(()=>{
    console.log("data4 saved");
    return savetoDB("narasiyappa");
})
.catch(()=>{
    console.log("failed to save the data");
});

//using result and error to print values

savetoDB("hemanth").then((result)=>{
    console.log("data1 saved");
    console.log("result of promise:",result);
    return savetoDB("lokesh");
})
.then((result)=>{
    console.log("data2 saved");
    console.log("result of promise:",result);
    return savetoDB("lakshmi");
})
.then((result)=>{
    console.log("data3 saved");
    console.log("result of promise:",result);
    return savetoDB("chikamma");
})
.then((result)=>{
    console.log("data4 saved");
    console.log("result of promise:",result);
    return savetoDB("narasiyappa");
})
.catch((error)=>{
    console.log("error of promise:",error);
    console.log("failed to save the data");
});

//--------------using promise in callback hell of changing color

changecolor("red",500,()=>{
    changecolor("yellow",1000,()=>{
        changecolor("green",1500,()=>{
            changecolor("magenta",2000,()=>{
                changecolor("blue",2500,()=>{
                    changecolor("orange",3000);
                });
            });
        });
    });
});
function changecolor(color,delay)
{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>
    {
        if(color=="")
        {
            reject("cannot chage color");
        }else{
        h1.style.color=color
        resolve("color changed!");
        }
    },delay);
    });
}
// let request=changecolor("magenta",5000);
// console.log(request);
changecolor("red",1000).then(()=>{
    console.log("color changed to red");
    return changecolor("green",1000);
})
.then(()=>{
    console.log("color changed to green");
    return changecolor("blue",1000);
})
.then(()=>{
    console.log("color changed to blue");
    return changecolor("",1000);
})
.then(()=>{
    console.log("color changed to magenta");
    return changecolor("yellow",1000);
})
.then(()=>{
    console.log("color changed to yellow");
})
.catch(()=>{
    console.log("error changing color");
});