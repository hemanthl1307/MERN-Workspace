let btn=document.querySelector("button");
let p=document.querySelector("#jokes");
btn.addEventListener("click",getJokes);
let url="https://icanhazdadjoke.com/";
let url2="https://dog.ceo/api/breeds/image/random";
async function getJokes()
{
    try{
        let res=await axios.get(url,{
            headers:{
                Accept:"application/json"
            }
        });
        let ans=res.data.joke;
        console.log(ans);
        p.innerHTML=ans;
    }
    catch(err)
    {
        console.log("ERROR caught",err);
    }
}
let dogbtn=document.querySelector("#dog");
let img=document.querySelector("img");
dogbtn.addEventListener("click",getdogimg);
async function getdogimg()
{
    try{
        let res2=await axios.get(url2,{
            headers:{
                Accept:"application/json"
            }
        });
        let ans2=res2.data.message;
        console.log(ans2);
        img.setAttribute("src",ans2);
    }
    catch(err)
    {
        console.log("ERROR caught",err);
    }
}