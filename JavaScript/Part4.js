//using array 
let student1=["Hemanth",19,9.61,"CSE-DS"];
console.log(student1);
//using object and object literal
const student={
    name:"Hemanth",
    age:19,
    cgpa:9.61,
    branch:"CSE-DS"
};
console.log(student);
const bengaluru={
    latitude:"28.7041N",
    longitude:"77.1025E"
};
console.log(bengaluru);
const items={
    price:100.99,
    discount:"10%",
    colors:["red","blue","green"]
};
console.log(items);
const twitter={
    username:"hemu2007",
    content:["photograpy","eduaction","comedy"],
    likes:"100K",
    reposts:50,
    tags:6
};
//to print and access values 
console.log(twitter);
console.log(twitter["username"]);
console.log(twitter.content);
console.log(twitter["likes"]);
console.log(twitter.content[0]);
console.log(twitter["content"][1]);
let info="tags";
console.log(twitter[info]);
//JS converts every key value is a string (IMP)
const obj={
    1:'a',
    2:'b',
    null:'c',
    undefined:'d',
    true:'e'
};
console.log(obj);
console.log(obj[1]);
console.log(obj["1"]);
console.log(obj["null"]);
console.log(obj.true);
// console.log(obj.1);--->error cannot perform using dot operator
console.log(obj.undefined);
// to add update and delete values
const students={
    name:"hemu",
    branch:"DS",
    marks:94.4
};
console.log(students);
//add
students.gender='male';
console.log(students["gender"]);
console.log(students);
students.age=19;
console.log(students.age);
//update
console.log(students.branch);
students.branch="CSE-DS";
console.log(students.branch);
console.log(students.marks);
students.marks=[90,92,85];
console.log(students.marks);
students.age="Nineteen";
console.log(students["age"]);
//delete
delete students.branch;
console.log(students);
//objects of objects
const market={
    fruits:{
        apple:"10KG",
        mango:"5 KG",
        straberry:"1 Box"
    },
    vegetables:{
        onion:"2KG",
        carrot:[25.5,50],
        corriander:1
    },
    flower:{
        rose:10,
        jasmine:50.6,
        marigold:50
    }
};
console.log(market);
console.log(market.fruits);
console.log(market.vegetables.carrot);
console.log(market.vegetables.carrot[0]);
market.flower.rose=100;
console.log(market.flower.rose);
market.flower.sunflower=60;
console.log(market.flower.sunflower);
console.log(market.flower);
market.kitchen={steel:50,cutlery:20};
console.log(market);
//array of objects
const classInfo=[
    {
        name:"Hemanth",
        branch:"DS",
        cgpa:9.61
    },
    {
        name:"lokesh",
        branch:"AIML",
        cgpa:9.7
    }
];
console.log(classInfo);
console.log(classInfo.length);
console.log(classInfo[0]);
console.log(classInfo[0].name);
console.log(classInfo[0].branch);
console.log(classInfo[0].cgpa);
classInfo[0].branch="CSE-DS";
classInfo[0].gender="Male";
console.log(classInfo);
//Math Object 
//1.Properties
console.log(Math);
console.log(Math.PI);
console.log(Math.E);
//2.Methods
//A.Math.abs
console.log(Math.abs(5));
console.log(Math.abs(-5));
console.log(Math.abs(-5.5));
//B.Math.pow
console.log(Math.pow(2,2));
console.log(Math.pow(2,4));
//C.Math.floor
console.log(Math.floor(5));
console.log(Math.floor(5.5));
console.log(Math.floor(5.99999999999));
console.log(Math.floor(-1));
console.log(Math.floor(-1.0));
console.log(Math.floor(-1.01));
console.log(Math.floor(-1.999));
//Math.ceil
console.log(Math.ceil(5));
console.log(Math.ceil(5.01));
console.log(Math.ceil(5.55));
console.log(Math.ceil(-5));
console.log(Math.ceil(-5.0));
console.log(Math.ceil(-5.5));
console.log(Math.ceil(-5.999));
//Math.random()
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
//to generate random number form 1 to 10
let num=Math.random(); //generates random number from 0 to 1
num=num*10;//converts to integer
console.log(num);
num=Math.floor(num);//removes decimal
console.log(num);
//but the above does not generate 10 range is 0 to 9 (10 excluded)
num=num+1
console.log(num);
//in short 
console.log(Math.floor(Math.random()*10)+1);
