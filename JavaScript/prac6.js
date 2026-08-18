// //Question-1
const square= n =>(n*n);
console.log(square(4));
// //Question-2
let id=setInterval( ()=>{
    console.log("Hello World!");
},2000);
setTimeout(()=>{
    clearInterval(id);
    console.log("Ended setInterval");
},10000);
// //Question-3
let arravg=(arr)=>{
    let sum=0;
    let avg=0;
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    avg=sum/arr.length;
    return avg;
}
let arr=[2,4,6,8,10];
console.log(arravg(arr));
//Question-4
let isEven= n =>{
    if(n%2==0)
    {
        console.log(`${n} is Even number`);
    }else{
        console.log(`${n} is Odd number`);
    }
}
console.log(isEven(2));
console.log(isEven(5));
console.log(isEven(10));
//Question-5
const object={
    message:"Hello,World!",
    logMessage(){
        console.log(this.message);
    }
};
console.log(object.logMessage);
console.log(object.logMessage());
setTimeout(object.logMessage,1000);
setTimeout(object.logMessage(),1000);
//my understanding
//object is an object in JS it has object literal message as key with value Hello world then we are creating 
// normal function which prints this.message here this refers to the calling object i.e(object) becuase it is a normal function
//now we have another function setTimeout where we are passing object.logMessage here we are passing 
// defination of function so this refers to the calling object here setTimout whose this is window so the output will be undefined right
//Question-6
let length=4;
function callback()
{
    console.log(this.length);
}
const object={
    length:5,
    method(callback)
    {
        callback();
        console.log(this.length);
    },
};
object.method(callback,1,2);
//here mathod is a name like add(callback) etc don't get confuse with names!
//When a function is called as `object.method()`, `this` inside `method` refers to 
// `object`. But when `method` calls another normal function simply as `callback()`, `this`
//  inside `callback` does not remain `object`; in a browser it refers to `window`. Also, 
// `let length = 4` is a separate variable, so `this.length` does not refer to that `4`.
