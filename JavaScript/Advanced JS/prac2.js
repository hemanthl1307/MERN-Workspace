let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("#search");
let input=document.querySelector("input");
let result=document.querySelector("#result");
btn.addEventListener("click",getuni);
async function getuni()
{
    let country=input.value;
    try{
        let conf={
            headers:{
                Accept:"application/json"
            }
        }
        let res=await axios.get(url+country,conf);
        for(col of res.data)
        {
            let li=document.createElement("li");
            li.innerText=col.name;
            result.appendChild(li);
        }
    }
    catch(err){
        console.log("ERROR:",err);
    }
}