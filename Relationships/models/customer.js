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

const OrderSchema=new mongoose.Schema({
    item:String,
    price:Number,
});

const Order=mongoose.model("Order",OrderSchema);

// const addOrder=async()=>{
//     let res=await Order.insertMany([
//         {item:"samosa",price:12},
//         {item:"chips",price:10},
//         {item:"chocolate",price:20}
//     ]);
//     console.log(res);
// }
// addOrder();

const CustomerSchema= new mongoose.Schema({
    name:String,
    orders:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Order"
        }
    ]
});

CustomerSchema.pre("findOneAndDelete",async()=>{
    console.log("deleteing a customer");
});

CustomerSchema.post("findOneAndDelete",async(customer)=>{
    // console.log("POST METHOD");
    let res=await Order.deleteMany({
        _id:{
            $in:customer.orders
        }
    });
    console.log(res);
});

const Customer=new mongoose.model("Customer",CustomerSchema);

// const addcustomer=async()=>{
//     let cust1=new Customer({
//         name:"Hemanth L",
//     });
//     let order1=await Order.findOne({item:"samosa"});
//     let order2=await Order.findOne({item:"chips"});

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let res=await cust1.save();
//     console.log(res);
// }

// addcustomer();

const addcust=async()=>{
    let newcust=new Customer({
        name:"Rajat"
    });
    let neworder=new Order({
        item:"Taco",
        price:50,
    });

    newcust.orders.push(neworder);

    await newcust.save();
    await neworder.save();
    console.log("customer added succesfully!"); 
};

// addcust();

const deletecust=async()=>{
    let data=await Customer.findByIdAndDelete("6aef054e7696be33f0a7bfbf");
    console.log(data);
}
deletecust();