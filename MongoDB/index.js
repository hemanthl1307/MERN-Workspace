const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("connection successfull!");
})
.catch((err)=>{
    console.log("connection failed",err)
});

async function main()
{
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
//--------------------------define schema-------------------------------
const userschema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

//---------------------------define a model------------------------------
const Employee=mongoose.model("Employee",userschema);
const User=mongoose.model("User",userschema);
//---------------------Insert Single Value to DB------------------------------------
const user1=new User({
    name:"Hemanth L",
    email:"hemanthl123@gmail.com",
    age:48
});
user1.save()
const user2=new User({
    name:"Lokesh",
    email:"lokesh45@gmail.com",
    age:50
});
user2.save()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});
//---------------------Insert Many to DB------------------------------------
User.insertMany([
    {name:"Tony",email:"tony@gmail.com",age:18},
    {name:"Bruce",email:"bruce@gmail.com",age:20},
    {name:"Peter",email:"peter@gmail.com",age:21},
])
.then((res)=>{
    console.log(res);
});
//-------------------------------Find in DB----------------------------------
User.find()
.then(res=>{console.log(res);})
.catch(err=>{console.log(err);});

User.find({age:{$lte:18}})
.then(res=>{console.log(res);})
.catch(err=>{console.log(err);});

User.find({name:{$in:"Hemanth L"}})
.then(res=>{console.log(res);})
.catch(err=>{console.log(err);});

User.findOne({age:{$lte:18}})
.then(res=>{console.log(res);})
.catch(err=>{console.log(err);});

User.findOne({_id:"6ab3eae3c4f24762fe0bdc6d"})
.then(res=>{console.log(res);})
.catch(err=>{console.log(err);});

User.findById("6ab674933e9067ab2b089c9d")
.then(res=>{console.log(res);})
.catch(err=>{console.log(err);});

//-----------------------------------Update DB-------------------------
User.updateOne({name:"Lokesh"},{age:51})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});

User.updateMany({age:{$gte:21}},{age:30})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});

User.findOneAndUpdate({name:"Bruce"},{age:50},{new:true})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});

User.findByIdAndUpdate(("6ab3eaa18287bb698606d64a"),{age:19},{new:true})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});

// -------------------------delete-----------------------
User.deleteOne({name:"Bruce"})
.then(res=>{console.log(res)});

User.deleteMany({name:"Bruce"})
.then(res=>{console.log(res)});

User.deleteMany({name:"Tony"})
.then(res=>{console.log(res)});

User.deleteMany({name:"Peter"})
.then(res=>{console.log(res)});

User.findByIdAndDelete(('6ab7c567b0ce28a3d86e5b08'))
.then((res)=>{console.log(res)});

User.findOneAndDelete({name:"Tony"})
.then(res=>{console.log(res)});


