const student={
    name:"Hemanth",
    age:19,
    comp:95,
    math:99,
    phy:90,
    getAvg()
    {
        console.log(this);
        let avg=(this.comp+this.phy+this.math)/3;
        console.log(avg);
        //this here refers to the object and variables and function present only within this block
        //if we try to access this outside this scope does not print/exceute the object values.
    }
}
console.log(student.getAvg());
console.log(this); 
//here this refers to the window 
//window is a object that is present in the higher level everything below will be our object,code etc...
//arrow function
const print= () =>{
    console.log("holla hemanth!");
}
print();
const sum=(a,b) =>{
    return a+b;
}
console.log(sum(5,10));

const cube= n=>{
    console.log(n*n*n);
}
console.log(cube(3));
//implicit return 
const mul=(a,b) => a*b;
console.log(mul(12,2));
const cube = n => n*n*n;
console.log(cube(5));
//set timeout function
//exceute for givem time-->STOP
console.log("Hi there!");
setTimeout(()=>{console.log("Hemanth L");},1000);
console.log("I am ");
//set interval
//exceute for given time-->STOP-->EXECUTE--->STOP-->EXECUTE--->loops(never stops)
setInterval(() => {
    console.log("I am Hemanth L");
},2000);
// to stop this function we need to assign this into a variable and use clearinterval
let id1= setInterval(() => {
     console.log("Hemanth");
 },2000);
console.log(id1);
let id2= setInterval(() => {
     console.log("Lokesh Lakshmi");
 },2000);
console.log(id2);
//note--->Each variable will be having different ID 


//this with arrow function and this with normal function 
//============================================================IMP============================================================
const student={
    name:"aman",
    age:19,
    marks:95,
    prop:this,//gobal scope (window)
    getName:function() //calling object scope
    {
        console.log(this);
        return this.name;
    },
    getMarks:()=> //parent scope
    {
        console.log(this);
        return this.marks;
    }
};
console.log(student.getName());
console.log(student.getMarks()); //so the parent 'this' is window (global scope)
//another case
const student={
    name:"aman",
    age:19,
    marks:95,
    prop:this,//gobal scope (window)
    getName:function() //calling object scope
    {
        console.log(this);
        return this.name;
    },
    getMarks:()=> //parent scope
    {
        console.log(this);
        return this.marks;
    },
    getInfo1:function(){ //'this' depends on the parent here parent is function whose this is a student so indirectly 'this' is the student
    setTimeout(()=>{
        console.log(this);
    },1000);
    },
    getInfo2:function(){ //'this' depends on the caller function  for normal function here caller is setTimeout which is a window (global)
    setTimeout(function(){
        console.log(this);
    },1000);
    }
};
console.log(student.getInfo1());
console.log(student.getInfo2());

