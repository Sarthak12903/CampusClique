import mongoose from 'mongoose'


export const connectdb=async()=>{
    try{
   const connect=await mongoose.connect(process.env.MONGODB_URL)
  console.log(`Mongo DB connection: ${connect.connection.host}`);
    }catch(err){
        console.log("mongo connection error:", err);
        
    }

}