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
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const UserSchema=new mongoose.Schema({
    name:String,
    email:String
});

const PostSchema=new mongoose.Schema({
    content:String,
    likes:Number,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
});

const User=new mongoose.model("User",UserSchema);
const Post=new mongoose.model("Post",PostSchema);

// const addData=async()=>{
//     let user1=new User({
//         name:"Hemanth L",
//         email:"Hemanth123@gmail.com"
//     });
//     let post1=new Post({
//         content:"It's fun to learn MERN",
//         likes:110,
//     });
//     post1.user=user1;
//     await user1.save();
//     await post1.save();
// };

// addData();

const addData=async()=>{
    let user1=await User.findOne({name:"Hemanth L"});
    let post2=new Post({
        content:"It's fun to learn MERN",
        likes:70,
    });
    let post3=new Post({
        content:"Hello World!",
        likes:50,
    });
    let post4=new Post({
        content:"Its good to do yoga!",
        likes:700,
    });
    post2.user=user1;
    post3.user=user1;
    post4.user=user1;
    await post2.save();
    await post3.save();
    await post4.save();
};

addData();