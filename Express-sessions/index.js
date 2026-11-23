const express=require("express");
const app=express();
const session=require("express-session");
const flash=require("connect-flash");

app.use(flash());
app.use(session(
    {
    secret:"mysupersecretstring",
    resave:false,
    saveUninitialized:true
    }
));

app.get("/test",(req,res)=>{
    res.send("test successful!");
});

app.get("/reqcount",(req,res)=>{
    if(req.session.count){
        req.session.count++;
    }else{
        req.session.count=1;
    }
    res.send(`You sent a request ${req.session.count} times`);
});

app.get("/register",(req,res)=>{
    let {name="anonymous"}=req.query;
    req.session.name=name;
    res.redirect("/hello");
});

app.get("/hello",(req,res)=>{
    res.send(`hello ${req.session.name}`);
});

app.listen("3000",()=>{
    console.log("Listening to port 3000");
});
