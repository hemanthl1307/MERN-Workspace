let input=document.querySelector("#one");
input.addEventListener("mouseout",function(e)
{
    alert("Your out of mouse");
});
let inp=document.querySelector("#two");
inp.addEventListener("keypress",function(e)
{
    alert("You pressed a key");
});
document.addEventListener("scroll",function(){
    alert("You scrolled the webpage");
});
window.addEventListener("load",function()
{
    alert("you loaded the page");
});
let btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    btn.style.backgroundColor="green";
});
let inputbox=document.querySelector("#box");
let h2=document.querySelector("h2");
inputbox.addEventListener("input",()=>{
    inputbox.value=inputbox.value.replace(/[^a-zA-Z ]/g, "");
    h2.innerText=inputbox.value;
})