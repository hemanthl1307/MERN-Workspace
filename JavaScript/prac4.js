//Question-1
//random number between 1 to 100
console.log(Math.floor(Math.random()*100)+1);
//Question-2
//random number between 1 to 5
console.log(Math.floor(Math.random()*5)+1);
//Question-3
// random number between 20 to 25
console.log(Math.floor(Math.random()*5)+20);
//Activity-Number guessing Game
const max=prompt("Enter Maximum Number")
const random=Math.floor(Math.random()*max)+1;
let guess=prompt("Guess a number!");
// while(guess!=random)
// {
//     console.log("Wrong guess!")
//     guess=Number(prompt("Guess a number!"));
// }
// if(guess==random)
// {
//     console.log("you guessed right!");
//     console.log(`The random number was ${random}`);
// }
//OR
while(true)
{
if(guess=="quit"){
    console.log("User quit the game!");
    break;
}
if(guess==random)
{
    console.log("congrats!! , you guessed right!");
    console.log(`The random number was ${random}`);
    break;
}
else if(guess<random){
    guess=prompt("hint: Guess is to small,guess again")
}
else{
    guess=prompt("hint: Guess is to large,guess again")
}
}
//Question-4
let dice=Math.floor(Math.random()*6+1);
console.log(dice);
//Question-5
const car={
    name:"Toyoto",
    model:"Fortuner",
    color:"white"
};
console.log(car);
console.log(car.name);
//Question-6
const person={
    name:"Hemanth",
    age:19,
    city:"Mexico"
};
console.log(person);
person.city="New York";
console.log(person.city);
person.country="United States";
console.log(person);
