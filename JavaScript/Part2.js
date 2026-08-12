//String operation
//1.Trim method 
let msg="  hello   ";
console.log(msg);
console.log(msg.trim());
let password=prompt("Enter your password");
console.log(password);
console.log(password.trim());
//2.Uppercase and Lowercase
let name="HemANth";
console.log(name.toUpperCase());
console.log(name.toLowerCase());
let msg="error";
console.warn(msg.toUpperCase());
//3.indexOf method
let str="Hemanth";
console.log(str.indexOf('a'));
console.log(str.indexOf("man"));
console.log(str.indexOf("z"));
//Method chaining
let msg="  hello  ";
let newmsg=msg.trim();
console.log(newmsg);
newmsg=newmsg.toUpperCase();
console.log(newmsg);
// insted of this long code we can do using method chaining
let msg="  hello  ";
console.log(msg.trim().toUpperCase());
//4.Slice Method
let str="Hemanth Gowda L";
console.log(str.slice(0,8));
console.log(str.slice(8,13));
console.log(str.slice(8));
console.log(str.slice(8,str.length))
console.log(str.slice(-1));
console.log(str.slice(-8));
//5.Replace method
let str="IloveCoding";
console.log(str.replace("I","All "));
console.log(str.replace("love","do"));
console.log(str.replace("o","x"));
//6.Repeat method
let str="hemu";
console.log(str.repeat(3));
let str="Hemanth";
console.log(str.slice(2,5).repeat(3));


