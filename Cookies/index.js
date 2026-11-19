const express=require("express");
const app=express();
const cookieParser=require("cookie-parser");


// app.use(cookieParser());

app.use(cookieParser("secret"));

app.get("/getsignedcookie",(req,res)=>{
    res.cookie("made-in","India",{signed:true});
    res.send("Done!");
});

app.get("/verify",(req,res)=>{
    res.send(req.signedCookies);
});

app.get("/setcookies",(req,res)=>{
    res.cookie("greet","namaste");
    res.cookie("origin","India");
    res.cookie("name","Hemanth L")
    res.send("We sent you cookie");
});
app.listen("3000",()=>{
    console.log("Listening to port 3000");
});
app.get("/",(req,res)=>{
    console.log(req.cookies);
     res.send("Hello i am root!");
});

app.get("/greet",(req,res)=>{
    let {name="anonymous"}=req.cookies;
    res.send(`Hi ${name} Welcome to Amazon!`);
});

app.get("/user",(req,res)=>{
    res.send("Welcome to User page");
});
