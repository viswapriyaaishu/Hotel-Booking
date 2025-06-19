import { createHotel,getHotel,getHotels,updateHotel,deleteHotel, findByCity, countByType, listRooms } from "../controllers/Hotel.js";

import express from "express"
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router=express.Router()

router.post("/",verifyAdmin,createHotel)
router.get("/:id",getHotel)
router.get("/",getHotels)
router.put("/:id",updateHotel)
router.delete("/:id",verifyAdmin,deleteHotel)
router.get("/countByCity/count",findByCity)
router.get("/countByType/count",countByType)
router.get("/listrooms/:id",listRooms)

export default router