const mongoose=require('mongoose');
mongoose.connect(process.env.mongoUrl)
const connection=mongoose.connection;

connection.on('connected',()=>{
    console.log("Mongodb connection Successful");
})

connection.on('error',(err)=>{
    console.log("Mongodb connection failed");
})
module.exports=connection;