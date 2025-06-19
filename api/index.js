import mongoose from "mongoose"
import express from "express"
import dotenv from"dotenv"
import hotelRouter from "./routes/Hotel.js"
import authRouter from "./routes/Auth.js"
import userRouter from './routes/User.js'
import RoomRouter from './routes/Room.js'
import cors from "cors"
import { errHandler } from "./utils/authErrHandler.js"
import cookieParser from "cookie-parser"
dotenv.config()

const dbConn=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Connected to database ${conn.connection.host}`)
    }
    catch(err)
    {
        next(err)
    }
}

const app=express()
app.use(cors())
app.use(cookieParser())
app.use(express.json())

mongoose.connection.on("disconnected",()=>{
    console.log("Disconnected from database")
})

mongoose.connection.on("connected",()=>{
    console.log("Connected to Db successfully")
})

app.use("/api/hotels",hotelRouter)
app.use("/api/login",authRouter)
app.use("/api/users",userRouter)
app.use("/api/rooms",RoomRouter)

app.use((err,req,res,next)=>{
    return res.status(401).json(errHandler(err.status,err.message))
})
app.listen(process.env.port||3000,()=>{
    dbConn()

    console.log("Listening on port ",process.env.port)
})