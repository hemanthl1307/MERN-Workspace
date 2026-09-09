const express=require("express");
const app=express();
const port=8080;
const path=require("path");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

app.listen(port,()=>{
    console.log(`listening to the port ${port}`);
});
let posts=[
    {
        username:"Hemanthl1307",
        content:"Hardwork is the key to success",
    },
    {
        username:"Lokesh@45",
        content:"Today i painted Rose",
    },
    {
        username:"Lakshmi_111",
        content:"Check out my new receipe in my cookbook",
    },
];
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("form.ejs");
});
app.post("/posts",(req,res)=>{
    let{username,content}=req.body;
    posts.push({username,content});
    res.redirect("/posts");
});