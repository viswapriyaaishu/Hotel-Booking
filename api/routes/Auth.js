import express from "express"
import { login, register } from "../controllers/Auth.js"

const router=express.Router()

router.post("/register",register)
router.post("/logins",login)

export default router

