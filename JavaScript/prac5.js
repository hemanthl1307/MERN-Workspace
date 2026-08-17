//Question-1
// function Poem()
{
    console.log("Jhonny Jhonny Yes Pappa");
    console.log("Eating Sugar No Pappa")
    console.log("Open your mouth");
    console.log("Ha Ha Ha....");
}
Poem();
//Question-2
function Rolldie()
{
    let roll=Math.floor(Math.random()*6)+1;
    console.log(roll);
}
Rolldie();

//Qustion-3
function Average(a,b,c)
{
    let avg=(a+b+c)/3;
    console.log(avg);
}
Average(5,5,5);
Average(27,15,9);
//Question-4
function multable(n)
{
    for(let i=1;i<=10;i++)
    {
        console.log(`${n} * ${i} = ${i*n}`);
    }
}
multable(2);
multable(5);
multable(12);

//Question-5
function SumtoN(n)
{
    let sum=0;
    for(let i=0;i<=n;i++)
    {
        sum+=i;
    }
    return sum;
}
console.log(SumtoN(10));
console.log(SumtoN(100));
console.log(SumtoN(1000));
//Question-6
function Stringconcat(arr)
{
    let str="";
    for(let i=0;i<arr.length;i++)
    {
        str+=arr[i];
    }
    return str;
}
let arr=["hi","hello","good","morning","!"];
console.log(Stringconcat(arr));
//Question-7
let greet="hello";//global scope
function changeGreet(){
    let greet="namaste"; //function scope
    console.log(greet);
    function innergreet()
    {
        console.log(greet);//lexical scope
    }
    innergreet();
}
console.log(greet);//hello
changeGreet();//namaste
//Question-8
function greater(arr,num)
{
    let result=[];
    for(let i=0;i<arr.length    ;i++)
    {
        if(arr[i]>num)
        {
            result.push(arr[i]);
        }
    }
    return result;
}
let arr=[2,8,4,10,,1,25,30,8,4];
console.log(greater(arr,5));
//Question-9
function long(arr)
{
    let currlength=0;
    let result="";
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i].length>currlength)
        {
            currlength=arr[i].length;
            result=arr[i];
        }
    }
    return result;
}
let arr= ["Australia", "Germany", "United States of America"]
console.log(long(arr));
//Question-10
function vowelcount(str)
{
    let count=0;
    let vowel="aeiou";
    for(let i=0;i<str.length;i++)
    {
        if(vowel.includes(str[i]))
        {
            count++;
        }
    }
    return count;
}
console.log(vowelcount("lokesh"));
//Question-11
function generaterandom(max)
{
    let random=Math.floor(Math.random()*max)+1;
    return random;
}
console.log(generaterandom(10));
console.log(generaterandom(100));
//Question-12
function unique(str)
{
    let result="";
    for(let i=0;i<str.length;i++)
    {
        if(!(result.includes(str[i])))
        {
            result+=str[i];
        }
    }
    return result;
}
console.log(unique("abcdabcdefgggh"));