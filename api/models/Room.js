
import mongoose from "mongoose"
const RoomSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },

    maxPeople:{
        type:Number,
        default:0
    },

    price:{
        type:Number,
        required:true
    },

    roomno:[{rno:{type:Number},unavailable_dates:[{type:Date}]}]
},{timestamps:true})

export default mongoose.model("Room",RoomSchema)