import express from "express"
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/User.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js"

const router=express.Router()

router.get("/checkauth",verifyToken,(req,res,next)=>{
    res.send("User is logged in")
})

router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
    res.send("User you are logged in and you can delete your account")
})

router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
    res.send("admin you are logged in and you can delete all accounts")
})

router.put("/:id",verifyUser,updateUser)
router.get("/:id",verifyUser,getUser)
router.get("/",verifyAdmin,getUsers)
router.delete("/:id",verifyUser,deleteUser)

export default router;