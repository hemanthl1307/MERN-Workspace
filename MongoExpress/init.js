const mongoose=require("mongoose");
const Chat=require("./models/chat.js");

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

let allchats=([
    {
     from: 'hemanth',
    to: 'karan',
    msg: 'send me assignment',
    created_at:new Date()
    },
    {
        from:"neha",
        to:"priya",
        msg:"can you teach me JS callbacks",
        created_at:new Date()
    },
    {
    from:"rahul",
    to:"arjun",
    msg:"can you explain promises in JS",
    created_at:new Date()
},
{
    from:"priya",
    to:"neha",
    msg:"how does async await work",
    created_at:new Date()
},
{
    from:"arjun",
    to:"rohan",
    msg:"can you help me with MongoDB",
    created_at:new Date()
},
{
    from:"rahul",
    to:"arjun",
    msg:"hey, are you coming to college tomorrow?",
    created_at:new Date()
},
{
    from:"priya",
    to:"neha",
    msg:"did you finish the assignment?",
    created_at:new Date()
},
{
    from:"arjun",
    to:"rohan",
    msg:"let's meet at 5 pm",
    created_at:new Date()
},
{
    from:"sneha",
    to:"priya",
    msg:"what are you doing today?",
    created_at:new Date()
},
{
    from:"rohan",
    to:"rahul",
    msg:"did you watch the new movie?",
    created_at:new Date()
},
{
    from:"neha",
    to:"sneha",
    msg:"can you send me the notes?",
    created_at:new Date()
},
{
    from:"vishal",
    to:"arjun",
    msg:"where are you now?",
    created_at:new Date()
},
{
    from:"priya",
    to:"rohan",
    msg:"let's go for coffee tomorrow",
    created_at:new Date()
}
]);

Chat.insertMany(allchats);