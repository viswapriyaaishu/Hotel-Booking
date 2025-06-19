import jwt from "jsonwebtoken"
import { errHandler } from "./authErrHandler.js"

export const verifyToken=(req,res,next)=>{
    const token=req.cookies.access_token


    if(!token){
        next(errHandler(401,"User is not authenticated"))
    }

    const ver=jwt.verify(token,process.env.ACCESS_TOKEN,(err,user)=>{
        if(err)
        {
            next(errHandler(401,"Token is invalid"))
        }
        req.user=user
        next()
    })

    
}

export const verifyUser=(req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.id===req.params.id || req.user.isAdmin)
        {
            next()
        }
        else{
            next(errHandler(401,"user is not authorized"))
        }
    })
}

export const verifyAdmin=(req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.isAdmin)
        {
            next()
        }
        else{
            next(errHandler(401,"Only admins can access this"))
        }
    })
}