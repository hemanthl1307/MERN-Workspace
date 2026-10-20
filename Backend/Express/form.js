const express=require("express");
const app=express();
const port=7000;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
});
app.get("/register",(req,res)=>{
    let {username,password}=req.query;
     console.log(username,password);
    res.send(`Welcome! ${username} this is a GET response<br>Your password is set to ${password}`);
});
app.post("/register",(req,res)=>{
        console.log(req.body);
        let {username,password}=req.body;
        console.log(username,password);
        res.send(`Welcome! ${username} this is a POST response<br>Your password is set to ${password}`);
});