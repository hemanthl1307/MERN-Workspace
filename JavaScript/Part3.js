//loops in JS
for(let i=1;i<=5;i++)
{
    console.log(i);
}
for(let i=5;i>=1;i--)
{
    console.log(i);
}
//odd numbers from 1 to 15
for(let i=1;i<=15;i=i+2)
{
    console.log(i);
}
//even numbers from 0 to 10
for(let i=0;i<=10;i=i+2)
{
    console.log(i);
}
//multiplication table for a number
let num=prompt("Enter a number");
console.log(`The Multiplication table of ${num} is `)
for(let i=1;i<=10;i++)
{
    console.log(`${num} * ${i} = ${i*num}`);
}
//break keyword
let i=1;
while(i<=5)
{
   if(i==4)
   {   
      break;
   }
   console.log(i);
   i++;
}
console.log("you used break above")
//loops on arrays
let fruits=["apple","mango","banana","orange","litchi"];
fruits.push("pinapple");
 //forward
console.log("fowward")
for(let i=0;i<fruits.length;i++)
{
    console.log(`${i} => ${fruits[i]}`);
}
 //backward
console.log("backward");
for(let i=fruits.length-1;i>=0;i--)
{
    console.log(`${i} => ${fruits[i]}`);
}
//loops on 2-D array
let stud=[
    ["hemanth",90],
    ["lakshmi",80],
    ["lokesh",100]
];
for(let i=0;i<stud.length;i++)
{
    console.log(`student no ${i+1}`);
    for(let j=0;j<stud[i].length;j++)
    {
        console.log(stud[i][j]);
    }
}
//for of loop
let movies=["odyseey","Jurassic world","Tenet","Knives out"];
for(movie of movies)
{
    console.log(movie);
}
let num=[2,4,6,8,10,12,16,18,20]
for(i of num)
{
    console.log(i);
}
for(char of "Hemanth L Gowda")
{
    console.log(char);
}
//nested for-of loop
let stud=[
    ["hemanth",90],
    ["lakshmi",80],
    ["lokesh",100]
];
for(list of stud)
{
    for(hero of list)
    {
        console.log(hero);
    }
}
