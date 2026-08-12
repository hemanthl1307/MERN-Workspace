//Question-1
let color=prompt("Enter the color");
if(color=="red" || color=="Red")
{
    console.log("STOP");
}
else if(color=="green" || color== "Green")
{
    console.log("GO");
}
else if(color=="yellow" || color=="Yellow")
{
    console.log("SLOW DOWN");
}
else{
    console.log("Invalid color");
}
//Question-2
let size=prompt("Enter the size of popcorn");
if(size=="XL")
{
    console.log("price is 250");
}
else if(size=='L')
{
    console.log("price is 200");
}
else if(size=='M')
{
    console.log("price is 100");
}
else{
    console.log("price is 50")
}
//Question-3
let str=prompt("Enter a string");
if(str[0]==='a' && str.length>3)
{
    console.log("Good string");
}
else{
    console.log("Bad string");
}
//Question-4
let day=Number(prompt("Enter the day of the week"));
switch(day)
{
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");    
}
//Question-5
let num=30;
if(num%10==0)
{
    console.log("good");
}
else{
    console.log("bad");
}
//Question-6
let name=prompt("enter your name");
let age=prompt("enter your age");
alert(`${name} is ${age} year old.`);
Question-7
let str=prompt("Enter a string");
if((str[0]=='a' || str[0]=='A') && str.length>5)
{
    console.log("golden string");
}
else{
    console.log("not a golden string");
}
//Question-8
let num1=Number(prompt("Enter number1"));
let num2=Number(prompt("Enter number2"));
let num3=Number(prompt("Enter number3"));
if(num1>=num2 && num1>=num3)
{
    console.log(`${num1} is greater`);
}
else if(num2>=num1 && num2>=num3)
{
    console.log(`${num2} is greater`);
}
else {
    console.log(`${num3} is greater`);
}
// Question-9
let num1=prompt("Enter number1")    ;
let num2=prompt("Enter number2");
if(num1[num1.length-1]==num2[num2.length-1])
{
    console.log("same last digit");
}
else{
    console.log("does not have last same digit");
}