import express from "express"
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateUnavailableDates } from "../controllers/Room.js"

const router=express.Router()

router.post("/:hotelid",createRoom)
router.put("/:id",updateRoom)
router.delete("/:id/:hotelid",deleteRoom)
router.get("/:id",getRoom)
router.get("/",getRooms)
router.put("/availability/:id",updateUnavailableDates)

export default router