import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true
},
isAdmin:{
    type:Boolean,
    default:false
},
city:{
    type:String,
    required:true
},
country:{
    type:String,
    required:true
},
img:{
    type:String,
    required:true
},
phoneno:{
    type:String,
    required:true
}
},{timestamps:true})

export default mongoose.model("User",userSchema)