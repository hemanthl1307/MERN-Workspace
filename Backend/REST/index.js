const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const { v4: uuidv4 } = require("uuid");

var methodOverride = require('method-override')
app.use(methodOverride('_method'));;

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
        id:uuidv4(),
        username:"Hemanthl1307",
        content:"Hardwork is the key to success",
    },
    {
        id:uuidv4(),
        username:"Lokesh@45",
        content:"Today i painted Rose",
    },
    {
        id:uuidv4(),
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
    let id=uuidv4();
    let{username,content}=req.body;
    posts.push({id,username,content});
    res.redirect("/posts");
});
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let post=posts.find((post)=>id==post.id);
    res.render("info.ejs",{post});
});
//update route
app.patch("/posts/:id",(req,res)=>{
    let { id } = req.params;
    let newcont=req.body.content;
    let post=posts.find((post)=>id==post.id);
    post.content=newcont;
    res.redirect("/posts");
    console.log(post);
});
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((post)=>id==post.id);
    res.render("edit.ejs",{post});
});
//delete route
app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
     posts=posts.filter((post)=>id !=post.id);
     res.redirect("/posts");
});
