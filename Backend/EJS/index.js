const express=require("express");
const app=express();
const path=require("path");
let port =8080;
app.set("views",path.join(__dirname,"/views"));
app.use(express.static("public"));
app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});
//normal response
// app.get("/",(req,res)=>{
//     res.send("hello there");
// });
//ejs response using render
// app.get("/",(req,res)=>{
//     res.render("home.ejs");
// });
app.get("/hello",(req,res)=>{
    res.send("hello there");
});
//passing data through EJS
app.get("/rolldice",(req,res)=>{
    let GetVal=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{GetVal});
});
// app.get("/ig_demo/:username",(req,res)=>{
//     let {username}=req.params;
//     let follower=["hemanth","lokesh","lakshmi","preetham","harish","gowri"];
//      res.render("instagram_demo.ejs",{username,follower});
// });
app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instaData=require("./data.json");
    let data=instaData[username]
    if(data)
    {
    res.render("insta.ejs",{data});
    }else{
        res.render("error.ejs");
    }
});