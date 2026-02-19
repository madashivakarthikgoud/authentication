import mongoose from "mongoose";

const connectDB = async ()=>{
    mongoose.connect.on('connected',()=>console.log("Database Connected"));

    await mongoose.connect(`${process.env.MONGODB_URL}/authentication`);
};

export default connectDB;
