const express=require("express");
const app=express();
const ExpressError=require("./Expresserror");
app.listen(8080,()=>{
    console.log("listening to port 8080");
});

// app.use((req,res,next)=>{
//     console.log("HI, i am middleware 1");
//     next();
//     console.log("This is written after middleware");
// });
// app.use((req,res,next)=>{
//     console.log("HI, i am middleware 2");
//     next();
// });

// app.use((req,res,next)=>{
//     req.time=new Date().toLocaleString();
//     console.log(req.method,req.path,req.time,req.hostname);
//     next();
// });

app.use("/api",(req,res,next)=>{
    let {token}=req.query;
    if(token==="giveaccess"){
        next();
    }else{
        throw new ExpressError(401,`ACCESS DENAIED with status ${401}`);
    }
});

app.get("/api",(req,res)=>{
    res.send("data");
});

app.get("/",(req,res)=>{
    res.send("Hello Hemanth L");
});

app.get("/random",(req,res)=>{
    res.send("Hi this is random page");
});

app.get("/err",(req,res)=>{
    abcd=abcd;
});

app.use((err,req,res,next)=>{
    let { status, message } = err;
    res.status(status).send(message);
    console.log("___________ERROR OCCURED!______________");
    next(err);
});

