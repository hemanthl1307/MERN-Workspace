let arr1=[1,2,3];
let arr2=[2,4,6];
console.log(arr2);
console.log(Array.prototype);
arr1.sayhello=()=>{
        console.log("hello");
}
arr2.sayhello=()=>{
        console.log("hello");
}
console.log(arr1.sayhello());
console.log(arr1==arr2);
console.log(arr1.sayhello==arr2.sayhello);
let str1="hemu";
let str2="hemanth";
console.log(str1.toUpperCase==str2.toUpperCase); //true because both have same prototype in common
//factory function:a function that create an object
function Personmaker(name,age)
{
    const Person={
        name:name,
        age:age,
        talk()
        {
            console.log(`Hi my name is ${this.name}`);
        }
    }
    return Person;
}
let p1=Personmaker("hemanth",19);
let p2=Personmaker("lokesh",30);
console.log(p1);
console.log(p2);
console.log(p1.talk===p2.talk);
//here each person gets their own copy (different copy for each person) so we use constructor
//Constructor:doesn't return anything and should start with Capital letter
function Person(name,age)
{
    this.name=name;
    this.age=age;
}
let P1=new Person("hemu",25);
let P2=new Person("lokesh",15);
console.log(P1);
console.log(P2);
Person.prototype.talk=function(){
    console.log(`Hi my name is ${this.name}`);
}
console.log(P1.talk===P2.talk);
//classes
class Person{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    talk()
    {
        console.log(`Hi, my name is ${this.name}`);
    }
}
let person1=new Person("hemanth",25);
console.log(person1);
console.log(person1.name);
console.log(person1.age);
console.log(person1.talk());
//Inheritance
class Student{
    constructor(name,age,marks)
    {
        this.name=name;
        this.age=age;
        this.marks=marks;
    }
    talk()
    {
        console.log(`Hello my name is ${this.name} and my age is ${this.age}`);
    }
}
let S1=new Student("hemanth",19,[15,25,65]);
class Teacher{
    constructor(name,age,subject)
    {
        this.name=name;
        this.age=age;
        this.subject=subject;
    }
    talk()
    {
        console.log(`Hello my name is ${this.name} and my age is ${this.age}`);
    }
}
let T1=new Teacher("lakshmi",25,"English");
//here name and age are common in both so we can create a class and inherit the properties 
//------------------with inheritance
class Person{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    talk()
    {
        console.log(`Hello my name is ${this.name} and my age is ${this.age}`);
    }
}
class Student extends Person{
    constructor(name,age,marks)
    {
        super(name,age);
        this.marks=marks;
    }
}
let s1=new Student("hemanth",19,[15,25,65]);
class Teacher extends Person{
    constructor(name,age,subject)
    {
        super(name,age);
        this.subject=subject;
    }
}
let t1=new Teacher("lakshmi",25,"English");
//---method overloading
class Pet{
    constructor(name)
    {
        this.name=name;
    }
    sayhello()
    {
        console.log(`${this.name} is a cute pet animal `);
    }
}
class Dog extends Pet{
    constructor(name)
    {
        super(name);
    }
    sayhi()
    {
        console.log(`Hi cutie`);
    }
    sayhello()
    {
        console.log(`${this.name} is a dog`);
    }
}
let dog1=new Dog("hachi");
