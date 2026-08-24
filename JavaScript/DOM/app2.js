// let btn1=document.querySelector('#btn1');
// console.log(btn1);
// btn1.classList.add('btn1');
// btn1.onclick=function(){
//     console.log("Are you sure? want to submit");
// }
// let btn=document.querySelectorAll('.btn');
// console.log(btn);
// for(let i=0;i<btn.length;i++)
// {
//     btn[i].classList.add('btn');
// }
// function sayHello()
// {
//     alert("Hello!");
// }
// for(btns of btn)
// {
//     btns.onclick=sayHello;
// }
// let newbtn=document.querySelectorAll('.mousebtn');

// for(btns of newbtn)
// {
//     btns.classList.add('btn1');
//     btns.onmouseenter=()=>{
//         alert("You entered button zone");
//     }
// }
// let eventbtn=document.querySelectorAll('.btnsub');
// for(btn of eventbtn)
// {
//     btn.style.color="white";
//     btn.style.backgroundColor="blue";
// }
// for(btn of eventbtn)
// {
// btn.addEventListener("click",sayHello);
// btn.addEventListener("click",sayName);
// }
// for(btn of eventbtn)
// {
//     btn.addEventListener("dblclick",()=>{
//     alert("You double clicked ME!");
// });
// }
// function sayName()
// {
//     alert("Hemanth L!");
// }
// let p=document.querySelector('p');
// p.addEventListener("click",()=>{
//     alert("You clicked this paragraph");
// });
// let box=document.querySelector('.box');
// box.addEventListener("mouseenter",()=>{
//     box.style.backgroundColor="pink";
//     box.style.color="red";
//     box.innerText="your in div zone";
// });
// let hbtn=document.querySelector('#hbtn');
// hbtn.addEventListener("click",function()
// {
//     console.dir(this);
// })
// let pnew=document.querySelector('#pnew');
// let head1=document.querySelector('h1');
// let h3=document.querySelector('h3');
// let btnclick=document.querySelector('#btnclick');
// // pnew.addEventListener("click",function(){
// //     console.dir(pnew.innerText);
// //     pnew.style.backgroundColor="blue";
// // });
// // head1.addEventListener("click",function(){
// //     console.dir(head1.innerText);
// //     head1.style.backgroundColor="blue";
// // });
// // h3.addEventListener("click",function(){
// //     console.dir(h3.innerText);
// //     h3.style.backgroundColor="blue";
// // });
// // btnclick.addEventListener("click",function(){
// //     console.dir(btnclick.innerText);
// //     btnclick.style.backgroundColor="blue";
// // });
// //----------------------using this for above code------------------
// function colorchange()
// {
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// }
// pnew.addEventListener("click",colorchange);
// head1.addEventListener("click",colorchange);
// h3.addEventListener("click",colorchange);
// btnclick.addEventListener("click",colorchange);
// eventbtn=document.querySelector('#btnevent');
// eventbtn.addEventListener('click',function(event)
// {
//     console.log(event);
//     console.log("button was clicked");
// })
// let input=document.querySelector('input');
// input.addEventListener("keyup",function(e)
// {
//     console.log(e);
//     console.log("Key was released");
// })
// input.addEventListener("keydown",function(e)
// {
//     console.log(e);
//     console.log("Key was pressed");
// })
// input.addEventListener("keydown",function(e)
// {
//     console.log(e);
//     console.log("Code:",e.code);
//      console.log("Key:",e.key);
// })
// let form=document.querySelector("form");
// form.addEventListener("submit",function(e)
// {
//     alert("form submitted");
// })
//to prevent from going to /action page use preventdefault
// form.addEventListener("submit",function(event)
// {
//     event.preventDefault();
//     alert("form submitted");
// })
let regform=document.querySelector('#regform');
regform.addEventListener("submit",function(e)
{
    e.preventDefault();
    // let user=document.querySelector('#user');
    // let pass=document.querySelector('#pass');
    // let mail=document.querySelector('#mail');
    // let user=this.elements[0];
    // let pass=this.elements[1];
    // let mail=this.elements[2];
    // console.log(`You have registered ${user.value} of email ${mail.value} and your password is set to ${pass.value} `)
});
let username=document.querySelector('#user');
username.addEventListener("change",function(e)
{
    console.log("change event");
    console.log("final input:",username.value);
})
username.addEventListener("input",function(e)
{
    console.log("Input event");
    console.log("final input:",username.value);
})

