let btn=document.querySelector('.btn');
btn.addEventListener("click",()=>{
    let head=document.querySelector('h1');
    let color=colorchange();
    head.innerText=color;
    let colorbox=document.querySelector('.colorbox');
    colorbox.style.backgroundColor=color;
});
function colorchange()
{
    let r=Math.floor(Math.random()*200)+1;
    let g=Math.floor(Math.random()*200)+1;
    let b=Math.floor(Math.random()*200)+1;
    let color=`rgb( ${r},${g},${b})`;
    return color;
}

display=document.querySelector('#display')
input=document.querySelector('input');
input.addEventListener('keyup',function(e)
{
    if(e.key=="ArrowUp")
    {
        display.innerText="character moves forward";
    }else if(e.key=="ArrowDown")
    {
        display.innerText="character moves Backward";
    }else if(e.key=="ArrowLeft")
    {
        display.innerText="character moves Left";
    }else if(e.key=="ArrowRight")
    {
        display.innerText="character moves Right";
    }
});
let textbox=document.querySelector('#textbox');
let textarea=document.querySelector("div h3");
textbox.addEventListener("input",function(e){
    textarea.innerText=textbox.value;
});