import Hotel from "../models/Hotel.js"
import Room from "../models/Room.js"

export const createHotel=async(req,res,next)=>{
    const newhotel=new Hotel(req.body)
    try{
        const hotelnaya=await newhotel.save()
        res.status(201).json(hotelnaya)
    }

    catch(err)
    {
        next(err)
    }
}

export const updateHotel=async(req,res,next)=>{
    try{
        const newhotel=await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(newhotel)
    }
    catch(err)
    {
        next(err)
    }
}

export const deleteHotel=async(req,res,next)=>{
try{
await Hotel.findByIdAndDelete(req.params.id)
res.status(200).json({message:"Deleted the hotel successfully"})
}
catch(err)
{
    next(err)
}
}

export const getHotel=async(req,res,next)=>{
    try{
        const newhotel=await Hotel.findById(req.params.id)
        res.status(200).json(newhotel)
    }
    catch(err)
    {
        next(err)
    }
}

export const getHotels=async(req,res,next)=>{
    try{
        const {min,max,limit,...others}=req.query
        const hotels=await Hotel.find({... others,cheapPrice:{$gt:Number(min) || 1,$lt:Number(max) || 20000}}).limit(req.query.limit)
        res.status(200).json(hotels)
    }
    catch(err)
    {
        next(err)
    }
}

export const findByCity=async(req,res,next)=>{

    const cities=req.query.cities.split(",")
   try{
    const list =await Promise.all(cities.map((city)=>{
        return Hotel.countDocuments({city:city})
    }))

    res.status(200).json(list)
   }

   catch(err)
   {
    next(err)
   }
}

export const countByType=async(req,res,next)=>{
    try{
        const hotelcount=await Hotel.countDocuments({type:"Hotel"})
        const aptcount=await Hotel.countDocuments({type:"Apartment"})
        const villacount=await Hotel.countDocuments({type:"Villa"})
        const bungalowcount=await Hotel.countDocuments({type:"Bungalow"})
        const cabincount=await Hotel.countDocuments({type:"Cabin"})

        res.json([
            {type:"hotels",count:hotelcount},
            {type:"apartments",count:aptcount},
            {type:"villas",count:villacount},
            {type:"bungalows",count:bungalowcount},
            {type:"cabins",count:cabincount}
        ])

    }catch(err){
        next(err)
    }
}

export const listRooms=async(req,res,next)=>{
    try{
        const hotelid=req.params.id
        const response=await Hotel.findById(hotelid)
        
        const resvalid=await Promise.all(response.rooms.map((room)=>(
            Room.findById(room)
        )))
        const roomsdata=resvalid.filter((room)=>room!==null)
        res.status(200).json(roomsdata)
    }
    catch(err)
    {
        next(err)
    }
}

