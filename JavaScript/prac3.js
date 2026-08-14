//favorite movie mini game
const favmovie="Jurassic world";
let guess=prompt("Enter a movie name");
while((guess!=favmovie))
{
    if(guess=="quit")
    {
        console.log("You quit the game!");
        break;
    }
    guess=prompt("Wrong guess!,Try again");
}
if(guess==favmovie)
{
    console.log("You guessed right!");
}
//To-do App
let todo=[];
let option=prompt("Enter your option");
while(true)
    {
        if(option=="quit" || option=="Quit")
        {
            console.log("Quitting app!");
            break;
        }
        if(option=="add" || option=="Add")
        {
        let add=prompt("Add your Todo's");
        todo.push(add);
        console.log("task added");
        }
        else if(option=="View" || option=="view")
        {
        console.log("Your Todo's are");
        console.log("-------------------")
        for(let i=0;i<todo.length;i++)
        {
            console.log(i,todo[i]);
        }  
        console.log("-------------------")
        }
        else if(option=="delete" || option=="Delete")
        {
            let index=prompt("Enter index for delete");
            todo.splice(index,1);
            console.log("Task deleted!");
        }
        else{
            console.log("Invalid");
        }
        option=prompt("Enter your option");
    }
//Question-1
let arr=[1, 2, 3, 4, 5, 6, 2, 3];
let num=prompt("Enter number");
for(let i=0;i<arr.length;i++)
{
    if(num==arr[i])
    {
        arr.splice(i,1);
    }
}
console.log(arr);
//Question-2
let num=287152;
let count=0;
while(num>0)
{
    num=Math.floor(num/10);
    count++;
}
console.log(`The count is: ${count}`);
//Question-3
let number = 287152;
let sum=0;
while(number>0)
{
    let rem=number%10;
    sum+=rem;
    number=Math.floor(number/10);
}
console.log(`The sum of digit is: ${sum}`);
//Question-4
let num=prompt("Enter a number");
let fact=1;
for(let i=1;i<=num;i++)
{
    fact=fact*i;
}
console.log(`The factorial is: ${fact}`);
//Question-5
let arr=[5,10,20,6,1];
let lar=arr[0];
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>lar)
    {
        lar=arr[i];
    }
}
console.log(`The largest element is ${lar}`);
