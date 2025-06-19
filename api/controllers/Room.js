import Hotel from "../models/Hotel.js"
import Room from "../models/Room.js"

export const createRoom=async(req,res,next)=>{
    const newroom=new Room(req.body)
    try{
        const hotelid=req.params.hotelid
        const newroom1=await newroom.save()

        try{
            const hotel1=await Hotel.findByIdAndUpdate(hotelid,{$push:{rooms:newroom1._id}})
        }

        catch(err){
            next(err)
        }

        res.status(200).json(newroom1)
    }
    catch(err){
        next(err)
    }
}

export const updateRoom=async(req,res,next)=>{
    try{
        const roomupd=await Room.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(roomupd)
    }
    catch(err)
    {
        next(err)
    }
}

export const deleteRoom=async(req,res,next)=>{
    try{
        const hotelid=req.params.hotelid

        await Room.findByIdAndDelete(req.params.id)

        try{
           const hotelupd=await Hotel.findByIdAndDelete(hotelid,{$pull:{rooms:req.params.id}})
        }
        catch(err)
        {
             next(err)
        }

        res.status(200).json({message:"Room has been deleted successfully"})
    }
    catch(err)
    {
        next(err)
    }
}

export const getRoom=async(req,res,next)=>{
    try{
        const roominfo=await Room.findById(req.params.id)
        res.status(200).json(roominfo)
    }
    catch(err)
    {
        next(err)
    }
}

export const getRooms=async(req,res,next)=>{
    try{
        const roomsinfo=await Room.find()
        res.status(200).json(roomsinfo)
    }
    catch(err)
    {
        next(err)
    }
}

export const updateUnavailableDates=async(req,res,next)=>{
    try{
        const roomnumber=req.params.id
        const roomupd=await Room.updateOne({"roomno._id":roomnumber},{$push:{"roomno.$.unavailable_dates":req.body.dates}})

        res.status(200).json(roomupd)
    }
    catch(err)
    {
        next(err)
    }
}