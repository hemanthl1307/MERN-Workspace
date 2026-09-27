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
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

//-----------------define a schema--------------------------
//normal way
// const bookSchema=new mongoose.Schema({
//     title:String,
//     author:String,
//     price:Number,
// });
// using schema validation

const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        maxLength:30
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min:[1,"Price is to Low Select a higer range"],
    },
    discount:{
        type:String,
        default:"5%",
    },
    category:{
        type:String,
        enum:["Engineering","PUC","Law"],
    },
    genre:[String],
});

Book=mongoose.model("Book",bookSchema);

const book2=new Book({
    title:"Research Methodology",
    author:"dr.Varnana Kumar",
    price:999,
    category:"Engineering",
    genre:["Published 2024",,"Awarded Best Research Paper"],
});

book2.save()
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err.errors.price.properties.message);
});

Book.updateOne({_id:"6ab910b47144ab3771e4283c"},{
    author:"Naveen Sharma",
    price:-100,
},{new:true},{runValidators:true})
.then((res)=>{console.log(res)})
.catch((err)=>{console.log(err)});

Book.insertMany([
    {title:"Concise Mathematics-XII",author:"Bipin Rao",price:550},
    {title:"Applied Chemistry",author:"RD Sharma",price:999},
    {title:"Digital Electronics ",author:"Bitin De",price:699},
]);


