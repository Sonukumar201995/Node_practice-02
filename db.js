const mongoose=require("mongoose");
const mongoURL="mongodb://127.0.0.1:27017/shopingsite";

mongoose.connect(mongoURL);
const db=mongoose.connection;

db.on("connected",()=>{
    console.log("connected to mongodb server");
})

db.on("disconnected",()=>{
    console.log("disconnected to mongodb server");
})

db.on("error",(error)=>{
    console.log("error in mongodb connected",error)
})


module.exports=db;