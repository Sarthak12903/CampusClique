import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoutes from './routes/auth.routes.js'
dotenv.config()
const PORT = process.env.PORT
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(
  cors({
    origin: process.env.FRONTADDRESS,
    credentials: true,
  })
);

app.use("api/auth" , authRoutes)
app.listen(PORT, ()=>{
    console.log(`Server is listening to ${PORT}`)
})