// console.log("I am learning Node.js");
// let name="Hemanth";
// for(let i=1;i<10;i++)
// {
//     console.log(`2*${i}=${i*2}`);
// }
// console.log(name);
// console.log("This was executed while learning node.js");
// console.log(process.argv);
// let args=process.argv;
//to greet hello 
// for(let i=2;i<args.length;i++)
// {
//     console.log("hello",args[i]);
// }
//to find length of argument
// for(let i=2;i<args.length;i++)
// {
//     console.log(args[i].length);
// }
//-----------simple mini project using module.export-----------
// let val=require("./math");
// console.log(val); 
// let obj=require("./math");
// console.log(obj);
// let arg=process.argv;
// let a=Number(process.argv[3]);
// let b=Number(process.argv[4]);
// switch(arg[2])
// {
//     case "sum":
//         obj.sum(a,b);
//         break;
//     case "sub":
//         obj.sub(a,b);
//         break; 
//     case "mul":
//         obj.mul(a,b);
//         break;
//     case "div":
//         obj.div(a,b);
//         break;           
//     default:
//     console.log("invalid");    
// }
//---------------------exporting directory
// let printfruits=require("./Fruits");
// for(let i=0;i<printfruits.length;i++)
// {
// console.log(printfruits[i].name);
// console.log(printfruits[i].color);
// }