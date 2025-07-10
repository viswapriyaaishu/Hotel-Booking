import User from "../models/User.js"
import { errHandler } from "../utils/authErrHandler.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
export const register=async(req,res,next)=>{
    try{

        const salt=bcrypt.genSaltSync(10)
        const hashpwd=bcrypt.hashSync(req.body.password,salt)
        const newUser=new User({
            ...req.body,
            password:hashpwd
        })

        const nayauser=await newUser.save()
        res.status(201).json(nayauser)
    }
    catch(err)
    {
        next(err)
    }
}

export const login=async(req,res,next)=>{
    try{
        const user=await User.findOne({email:req.body.email})

        if(!user) { return next(errHandler(400,"User not found"))}

        const ispwdcorrect=await bcrypt.compare(req.body.password,user.password)
        if(!ispwdcorrect){
           return next(errHandler(400,"Credential incorrect!! invalid details"))
        }

        const token=jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.ACCESS_TOKEN)

        const {_id,isAdmin,...otherdetails}=user._doc
        res.cookie('access_token',token,{httpOnly:true}).status(200).json({details:{...otherdetails},isAdmin})

    }
    catch(err)
    {
        next(err)
    }
}