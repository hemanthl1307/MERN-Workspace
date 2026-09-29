const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const mongoose=require("mongoose");
const Chat=require("./models/chat.js");
const methodOverride=require("method-override");

app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

async function main()
{
    await mongoose.connect('mongodb://127.0.0.1:27017/chatapp');
}

main()
.then(()=>{
    console.log("connection succesfull!");
})
.catch((err)=>{
    console.log("connection failed",err);
})

app.listen(port,()=>{
    console.log("listening to the port",port);
});

app.get("/",(req,res)=>{
    res.send("Hello Hemanth");
});

//Index route
app.get("/chats",async (req,res)=>{
    let chats=await Chat.find({});
    // console.log(chats);
    res.render("index.ejs",{chats});
});
//new chat route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/chats",(req,res)=>{
    let{from,to,msg}=req.body;
    const newchat=new Chat({
        from:from,
        msg:msg,
        to:to,
        created_at:new Date()
    });
    newchat.save()
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    });
    res.redirect("/chats");
});
//update/edit  chat
app.get("/chats/:id/edit",async (req,res)=>{
    let{id}=req.params;
    let chat=await Chat.findById(id)
    res.render("edit.ejs",{chat});
});

app.put("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    let {msg:newmsg}=req.body;
    let updatedchat= await Chat.findByIdAndUpdate(id,{msg:newmsg},{runValidators:true,new:true});
    console.log(updatedchat);
    res.redirect("/chats");
});
//delete chat

app.delete("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    let delchat=await Chat.findByIdAndDelete(id);
    console.log(delchat);
    res.redirect("/chats");
});

