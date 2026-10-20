const express=require("express");
const app=express();
//console.log(app);
let port =5000;
app.listen(port,()=>{
    console.log(`app is listening to the port ${port}`);
});
// app.use((req,res)=>{
//     //console.log(req);
//     console.log("request received");
//     // res.send("Hello,This is a textual response ");
//     // let code="<h1>Fruits</h1> <ul><li>Apple</li><li>Mango</li><li>Banana</li></ul>"
//     // res.send(code);
//     // res.send("{fruit:apple,color:red}");
//     res.send("[apple,mango,banana,grapes]")
//     console.log("response sent");
// });
app.get("/",(req,res)=>{
    console.log("request received");
    res.send("this is root page");
});
// app.get("/home",(req,res)=>{
//     res.send("this is hom page");
// });
// app.get("/contact",(req,res)=>{
//     res.send("this is contact page");
// });
// app.get("/*splat",(req,res)=>{
//     res.send("page not found");
// });
// app.post("/",(req,res)=>{
//     res.send("this is a sent through POST request in HOME page");
// });
// app.post("/info",(req,res)=>{
//     res.send("this is a sent through POST request in INFO page");
// });
// app.get("/:username",(req,res)=>{
//     console.log(req.params);
//     res.send("Hello,This is a GET REQUEST");
// });
// app.get("/:username/:id",(req,res)=>{
//     console.log(req.params);
//     res.send("Hello,This is a GET REQUEST");
// });
// app.get("/:username",(req,res)=>{
//     let {username}=req.params;
//     let info=`<h1>Welcome to the page of @ ${username}!<h1>`;
//     res.send(info);
// });
// app.get("/search",(req,res)=>{
//     console.log(req.query);
//     res.send("no results found");
// });
app.get("/search",(req,res)=>{
    let {q}=req.query;
    let printinfo=`<h1>You searched for ${q}<h1>`;
    res.send(printinfo);
});