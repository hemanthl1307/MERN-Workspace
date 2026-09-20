const { faker } = require('@faker-js/faker');
const mysql=require('mysql2');

const express=require("express");
const app=express();
const path=require("path");

const methodOverride=require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));

const { v4: uuidv4 } = require("uuid");

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'myapp',
  password:'Hemanth@12345'
});


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.listen("8080",()=>{
    console.log("app is listening to port 8080");
});
//-------------to know the count of user table---------------------------
app.get("/",(req,res)=>{
    let q=`SELECT count(*) FROM user`;
    try{
    connection.query(q,(err,result)=>{
        if(err)
        {
            throw err;
        }else{
            let count=result[0]['count(*)']
            res.render("home.ejs",{count});
            // console.log(result[0]['count(*)']);
        }
    });
}catch(err){
    console.log(err);
    res.send("Error in data base");
}
});
//-------------to get user information(table)---------------------
app.get("/user",(req,res)=>{
    let q=`SELECT * FROM user`;
    try{
    connection.query(q,(err,users)=>{
        if(err)
        {
            throw err;
        }else{
            res.render("user.ejs",{users});
        }
    });
}catch(err){
    console.log(err);
    res.send("Error in data base");
}
});
// -------------------to edit the username-----------------------
app.get("/user/:id/edit",(req,res)=>{
    let {id}=req.params;
    // console.log(id);
    let q=`SELECT * FROM user WHERE id='${id}'`;
    try{
    connection.query(q,(err,users)=>{
        if(err)
        {
            throw err;
        }else{
            // console.log(users);
            let info=users[0];
            res.render("edit.ejs",{info});
        }
    });
}catch(err){
    console.log(err);
    res.send("Error in data base");
}
});

app.patch("/user/:id",(req,res)=>{
    let {id}=req.params;
    // console.log(id);
    let q=`SELECT * FROM user WHERE id='${id}'`;
    let{password:formpass,username:newuser}=req.body;
    console.log(formpass,newuser);
    try{
    connection.query(q,(err,users)=>{
        if(err) throw err;
        let info=users[0];
        if(formpass!=info.password){
            res.send("WRONG PASSWORD");
        }else{
            let q=`UPDATE user SET username='${newuser}' WHERE id='${id}'`;
            connection.query(q,(err,result)=>{
                if(err) throw err;
                else{
                    res.redirect("/user");
                }
            })
        }
    });
}catch(err){
    console.log(err);
    res.send("Error in data base");
}
});
//---------------------add a new user to the table-----------------
app.get("/user/new",(req,res)=>{
    res.render("newuser.ejs");
})
app.post("/user",(req,res)=>{
    let id = uuidv4();
    let {username , email , password}=req.body;
    let q=`INSERT INTO user(id,username,email,password) VALUES('${id}','${username}','${email}','${password}')`;
    connection.query(q,(err,result)=>{
        if(err) throw err;
        else{
            res.redirect("localhost:8080");
        }
    });
});
//--------------------delete user---------------------------------
app.get("/user/:id/delete",(req,res)=>{
    let {id}=req.params;
    let q=`SELECT * FROM user WHERE id='${id}'`;
    try{
    connection.query(q,(err,users)=>{
        if(err)
        {
            throw err;
        }else{
            // console.log(users);
            let info=users[0];
           res.render("delete.ejs",{info});
        }
    });
    }
    catch(err){
        console.log("error in data base");
    }
});
app.delete("/user/:id", (req, res) => {

    let { id } = req.params;
    let { username, password } = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    connection.query(q, (err, users) => {
        if (err) throw err;
        let info = users[0];
        if (!info) {
            return res.send("User not found");
        }
        if (username != info.username || password != info.password) {
            return res.send("WRONG username and password");
        }
        let q = `DELETE FROM user WHERE username='${username}'`;
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send("deleted");
        });
    });
});
//-----------------get random data using faker-----------------------
let getRandomdata=()=>{
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

// let query=`CREATE TABLE IF NOT EXISTS user(
//     id VARCHAR(50) PRIMARY KEY,
//     username VARCHAR(50) UNIQUE,
//     email VARCHAR(50) UNIQUE NOT NULL,
//     password VARCHAR(50) NOT NULL
// );`
// let query="INSERT INTO user(id,username,email,password) VALUES(?,?,?,?)";
// let users1=["101","Hemanth L","hemu123","hemanth123@gmail.com","hemu741"]
// let users2=["102", "Rahul", "rahul123", "rahul@gmail.com","rahul123"];
//-------------------using array of arrays--------------------------------------------------------
// let query="INSERT INTO user(id,username,email,password) VALUES ?";
// let users = [
//     ["101", "hemu123", "hemanth123@gmail.com","hemu741"],
//     ["102",  "rahul123", "rahul@gmail.com","rahul123"],
//     ["103",  "arjun123", "arjun@gmail.com","arjun123"]
// ];
// --------------------inserting bulk data using faker--------------------------------------------

// let query="INSERT INTO user(id,username,email,password) VALUES ?";
// let data=[];
// for(let i=1;i<=100;i++)
// {
//     data.push(getRandomdata());
// }

// try{
//     connection.query(query,[data],(err,result)=>{
//         if(err)
//         {
//             throw err;
//         }else{
//             console.log(result);
//         }
//     });
// }catch(e){
//     console.log(err);
// }

// connection.end();
