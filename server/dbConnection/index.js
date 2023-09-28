import mongoose from "mongoose";

const DB_CONNECTION_URL = "mongodb://localhost:3005/test";

const connectDB = ()=>{
    console.log("DB trying to connect on"  + new Date());
 const options ={
    keepAlive: 1,
    autoReconnect: true,
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true,
 }

    mongoose.connect(DB_CONNECTION_URL,options)
};

export default connectDB;