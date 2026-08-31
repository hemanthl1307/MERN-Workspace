//our first API request
let url="https://icanhazdadjoke.com/";
//the headers accept is used to print the value in json
// fetch(url, {
//     headers: {
//         Accept: "application/json"
//     }
// })
//simple method data.json() is used to print the data inside the API 
// .then((data)=>{
//   console.log(data);
//   data.json().then((res)=>{
//     console.log(res.joke);
//   })
// })
// .catch((err)=>{
//   console.log("ERROR:",err);
// });

//using chaining
// .then((res)=>{
//   console.log(res);
//   return res.json();
// })
// .then((data)=>{
//   console.log(data.joke);
//   return fetch(url,{
//     headers:{
//       Accept:"application/json"
//     }
//   });
// })
// .then((res)=>{
//   return res.json();
// })  
// .then((data1)=>{
//   console.log(data1.joke);
// })
// .catch((err)=>{
//   console.log("ERROR:",err);
// });
// console.log("this is written at last");
// ---------------------------using asyn and await---------------
// async function getJokes()
// {
//   try{
//   let res=await fetch(url,{
//     headers:{
//       Accept:"application/json"
//     }
//   });
//   console.log(res);
//   let data= await res.json();
//   console.log(data.joke);

//   let res2=await fetch(url,{
//     headers:{
//       Accept:"application/json"
//     }
//   });
//   console.log(res2);
//   let data2= await res2.json();
//   console.log(data2.joke);
// }
// catch(err){
// console.log(`ERROR:${err}`);
// }
// console.log("This is end of function");
// }
// console.log(getJokes());
//---------------using axios for the same(It directly prints the data without printing promise) --------------
async function getJokes()
{
    try{
        let res=await axios.get(url,{
            headers:{
                Accept:"application/json"
            }
        });
        console.log(res.data.joke);

        let res2=await axios.get(url,{
            headers:{
                Accept:"application/json"
            }
        });
        console.log(res2.data.joke);
    }
    catch(e){
        console.log("ERROR:",e);
    }
} 
console.log(getJokes());