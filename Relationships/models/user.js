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

const Userschema=new mongoose.Schema({
    username:String,
    address:[
        {
            location:String,
            city:String
        }
    ],
});

const User=mongoose.model("User",Userschema);

//-------------------one to many Approach 1(one to few )-----------------------------
const addUser=async ()=>{
    let User1=new User({
        username:'sherlockholmes',
        address:[{
            location:'293A Baker street',
            city:'London'
    }],
    });
    User1.address.push({location:"56B church street", city:"New York city"});
    let result=await User1.save();
    console.log(result);
}
addUser();