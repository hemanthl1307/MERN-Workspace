console.log("This is printed using external JS");
let num=7;
console.log(num);
let apple=10;
let mango=10;
console.log("The total price is:"+(apple+mango)+" Rupees.");
//using embedded expression in string
console.log(`The total price is:${apple+mango} Rupees.`)
// conditional statements
let age=60;
//if statement
if(age>=18)
{
    console.log("You are eligible to vote");
}
if(age>20)
{
    console.log("You are in your 20's");
}
//if-else statement
if(age>=18)
{
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}
//if-else if
if(age<=18)
{
    console.log("You cannot vote");
    console.log("you are teenager")
}
else if(age>=20)
{
    console.log("you can vote");
    console.log("you are adult");
}
else if(age>=40)
{
    console.log("you are in mid-age");
}
else if(age>=60)
{
    console.log("you are old");
}
//if-elseif-else statememt
let color="blue";
if(color=="red")
{
    console.log("STOP");
}
else if(color=="green")
{
    console.log("GO");
}
else if(color=="yellow")
{
    console.log("WAIT/PAUSE");
}
else{
    console.log("Invalid color/traffic broke!");
}
//nested if-else
let marks= 25;   
if(marks>30)
{
    if(marks>=90)
    {
        console.log("O grade");
    }
    else if(marks>=80 && marks<90)
    {
        console.log("A+ Grade");
    }
    else if(marks >=70 && marks<80)
    {
        console.log("A Grade");
    }
    else if(marks>=60 && marks<70)
    {
        console.log("B+ Grade");
    }
    else if(marks>=50 && marks <60){
        console.log("B Grade");
    }
    else{
        console.log("C Grade");
    }
}   
else{
    console.log("Fail(F)");
} 
//truthy and falsy
if(NaN)
{
    console.log("true value");
}
else{
    console.log("false value");
}
//switch statement
let country="India";
switch(country)
{
    case "India":
        console.log("Cricket");
        break;
    case "UK":
        console.log("football")  ;
        break;
    case "Japan":
        console.log("baseball");
        break;
    case "Russia":
        console.log("Ice Hockey");
        break;
    default:
        console.log("None of the above!");              
}
alert("something is wrong!")
alert("DANGER!");
console.error("this is a error message!");
console.warn("This is a warning message");
let firstname=prompt("Enter you Name:");
let lastname=prompt("Enter your last name:");
console.log(firstname+" "+lastname);
alert(`Welcome ${firstname+" "+lastname} !`);