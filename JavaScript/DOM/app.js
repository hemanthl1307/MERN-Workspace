//--------------------------------------getElementbyID---------------------------
console.dir(document.getElementById("description"));
let obj=document.getElementById("description");
// obj.align="right"
//OR
// document.getElementById("description").align="right";
//-----------------------------------getElementbyClass
console.dir(document.getElementsByClassName("oldImg"));
console.dir(document.getElementsByClassName("oldImg")[0]);
console.dir(document.getElementsByClassName("oldImg")[1]);
let smallimg=document.getElementsByClassName("oldImg");
for(let i=0;i<smallimg.length;i++)
{
    // console.dir(smallimg[i]);
    // console.dir(smallimg[i].src);
    smallimg[i].src="https://i.pinimg.com/736x/ae/61/f2/ae61f26f3211941741e442e8ec54a35f.jpg";
    console.log(`the  image no ${i} is changed to spiderman`);
}
//---------------------------------------getElementByTagName-----------------------------------------
console.dir(document.getElementsByTagName("p"));
console.dir(document.getElementsByTagName("p")[0].innerText);
//----------------------------------------------queryselector--->selects only the first element
console.dir(document.querySelector("p"));
console.dir(document.querySelector("#para2"));
console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelector("div ul li a"));
console.dir(document.querySelector("div img"));
// //---------------------------------------------queryselector all--->selects every elements
console.log(document.querySelectorAll("div ul li a"))
console.log(document.querySelectorAll("img"))
let para=document.querySelector("#para2");
//--------------------------------------------manupulating using properties and methods-------------------
console.dir(para.innerText);
console.dir(para.innerHTML);
console.dir(para.textContent);
para.innerText="captian ameria is a superman according to me";
para.innerHTML="<u>captian ameria </u>is a superman according to me";
let heading=document.querySelector("#head");
heading.innerHTML=`<i>Superhero<i>`
//-----------------------------------------setter and getter---------------------------------
let img=document.querySelector("#firstImg");
console.dir(img);
console.log(img.getAttribute('id'));
img.setAttribute('id','captainamericaImg');
console.log(img.getAttribute('id'));
console.log(img.getAttribute('src'));
img.setAttribute('src',"https://i.pinimg.com/736x/ae/61/f2/ae61f26f3211941741e442e8ec54a35f.jpg");
let newclass=document.querySelector("div h4");
console.dir(newclass);
newclass.setAttribute('class','publication');
console.log(newclass.getAttribute('class'));
let mainhead=document.querySelector('#head');
console.log(mainhead.style);
mainhead.style.color="red";
mainhead.style.backgroundColor="blue";
let links=document.querySelectorAll(".box a");
//links.style.color="magenta"; //this doesn't work becuase we have collection of links we need to loop through each and change its color
links.forEach((el)=>{
    el.style.color="magenta";
})
//------------------------------------class List--------------------------------------------
let list=document.querySelector("div img");
console.dir(list.classList);
let heads=document.querySelector("h1");
console.log(heads.classList);
heads.classList.add("headstyle");
heads.classList.add("headmain");
heads.classList.remove("headmain");
console.dir(heads.classList.contains("headmain"));
console.dir(heads.classList.contains("headstyle"));
heads.classList.toggle("headstyle");
heads.classList.toggle("headstyle");
heads.classList.toggle("headmain");
//-----------------------------------------------Navigation----------------------------------------- 
let para=document.querySelector(".mainpara");
console.dir(para.parentElement);
console.dir(para.children);
console.dir(para.childElementCount);
console.log(para.previousElementSibling);
console.log(para.nextElementSibling);
let ul=document.querySelector(".box")
console.log(ul.children);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
let h2=document.querySelector("#description");
h2.previousElementSibling.style.color="red";
h2.previousElementSibling.style.backgroundColor="yellow";
//----------------------------------------------create element-------------------------------------
let p=document.createElement('p');
p.innerText="This is added using Java Script";
//appendchild element
let newp=document.querySelector('body');
newp.appendChild(p);

let p1=document.createElement('p');
p1.innerText="hello there from JS"
let inp=document.querySelector('.box');
inp.appendChild(p1);
//---------------------------------------------------append element----------------------------------------
let btn=document.createElement('button');
btn.innerHTML="Click Me!!";
newp.append(btn);
inp.append(btn);
btn.style.backgroundColor="red";
btn.style.color="white";
btn.style.width="80px";
btn.style.height="30px";
btn.style.borderRadius="20px";
btn.style.border="1px solid black"
inp.prepend(p1);
//-----------------------------------------------------Insert adjacent-------------------------------------
let para1=document.createElement('button');
para1.innerText="Insert Adjacent Demo";
para1.classList.add("design");
let newval=document.querySelector(".mainpara");
newval.insertAdjacentElement('beforebegin',para1);
let para2=document.createElement('button');
para2.innerText="Insert Adjacent Demo";
para2.classList.add("design");
newval.insertAdjacentElement('afterbegin',para2);
let para3=document.createElement('button');
para3.innerText="Insert Adjacent Demo";
para3.classList.add("design");
newval.insertAdjacentElement('beforeend',para3);
let para4=document.createElement('button');
para4.innerText="Insert Adjacent Demo";
para4.classList.add("design");
newval.insertAdjacentElement('afterend',para4);
//------------------------------------------------------Remove element----------------------------------------
// p1.remove();
inp.removeChild(p1);

