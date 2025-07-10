import {useState,useEffect} from 'react'
import HotelIcon from '@mui/icons-material/Hotel';
import { hotelitems } from '../../components/Form/hotelForm';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Navbar } from '../../components/Navbar/Navbar';
import '../new/NewHotel.scss'
import axios from 'axios';
import { useFetch } from '../../components/useFetch/useFetch';
import { useNavigate } from 'react-router-dom';
export const NewHotel=()=>{
  const [files,setFiles]=useState([])
  const [fields,setFields]=useState({})
  const [roomsselected,setroomsselected]=useState([])
  const {data,loading,error}=useFetch("/rooms")
  const nav=useNavigate()
  const handleselectrooms=(e)=>{
    const result=Array.from(e.target.selectedOptions,(option)=>option.value)
    setroomsselected(result)
  }
  const formSubmit=async(e)=>{
    e.preventDefault()

    try{
        const list=await Promise.all(Object.values(files).map(async(file)=>{
        const data1=new FormData()
    data1.append('file',file)
    data1.append('upload_preset','upload')

    try{
        const res=await axios.post("https://api.cloudinary.com/v1_1/dlcimnrkc/image/upload",data1)

        const {url}=res.data

        return url
    }
    catch(err)
    {
        console.log(err)
    }
}))
const listres={...fields,roomsselected,photos:list}
await axios.post("/hotels",listres,{withCredentials:true})
nav(-1)
    }
    catch(err)
    {
        console.log(err)
    }
  }
    return(
      <div className="outerconofhotel">
        <Sidebar></Sidebar>
        <div className="innerconofhotel">
            <Navbar></Navbar>
             <div className="newhotelbaap">
                <p>Add New Hotel</p>
                <div className="newhotelcon">
        <div className="newhotelconlside">
            <img src={files.length>0?URL.createObjectURL(files[0]) : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACUCAMAAAANv/M2AAAAVFBMVEXl5eXY2Njr6+vJycm+vr5hYWHMzMxlZWW0tLTi4uLb29uIiIipqano6OiFhYVra2tRUVFXV1ehoaGXl5dzc3NcXFzS0tJ+fn5LS0vx8fGQkJBFRUVRF/UQAAAEbklEQVR4nO2ajW6rOBBGwTZgG4z/baDv/547BtKS23avlK6AaudITSEm6mH4PCYVVYUgCIIgCIIgCIIgCIIgCIIgCIIg/wPUD7jKObEfIK/RFottXsZwco10nxN9jZZ2w1XSY1W/hqz1ddICpVEapX+RdGqTlL9KOg2haYJLH9a/QNrbhTPf5A/r20uLwXIJsGa5t7Q8bjd+3ZVDbOX7+O2kpaQfs062UOh1gzb8vtKyds3ynl9JI9ukUzPcVloy3fhOM/nwi5srhJrdVFomFzMTNEe+J1v0oWRZpjEcLsadpGUbrAcnmbxZ6j3LXYCMt71lt+weMg020+1NwbuO7tbZdp3R7JaLC9hFV8vD3rDuyZo7x8vUlPvobaSlHLrA5LGci122fXgtG7IdubiTtGyz8cebovIebw6hkLDbba3kHtKQgCbwZ+US7DZAc94jkeAeJPnVWqYbSMN1t0v65FzslrWbbIeUiHs7yDtIw3WP+nOZ38dKx4OlRa/NRDrr5PXxkLSPS/r2hg8WGsuTe78Swll/tTSUUmtef13n9zCHQy+EW5N0rTSE1oxfpflJewiHlQU+U1+b6ZJm8Rdn0PzjkEvjUXG70L8qf3ESl8aD/muabyr9kvLl0q+B0iiN0v+ltHyRC6Vzal+EXiY9Gt29yttF0lXiP0Be41wp8gMuckYQBEEQ5JejFNxUi+8e/fr8/n78yc+KKTYO5TdxOamKJJc7nfnjiTWVRk8Iz3zdIyyvx1YsL2Ibr13QXR5qBWM9MJ5yj0oG2zBQJNlQpVIwRmtj+3qzVtQGQpzp4IQqJbPpV9nRWFrkCC3Hlx85D5M1ZnpbzpGONoAiGcGjDnZsKwEq40O6KdLWZnBRLtpSYdXGGH0ZrTvTJ1Gl0SnCjVu/MJ7gXKQbO+7Sg80C7EitJ0aO0tFwCEATY5GevXGdLmHypi85LydI+DSQs57fBOkx2IEUafjGtbsOZnmSzk1IM1yGtdKV7uoFzkIJ3VBVvjzMM1R6cpUQ4iRp61js6AzSUpttBioWw1Ha8MX4YcrMgDSBV0XNCLO0gWAp6r1f2plDuEPo2jNqXaRnZ4LYpPemUFyfpEVjY9emIl31Ea5HNom0TZaQGmvtxEC6K9LpNGkRjC/xyFO7uXI7PkvPPBpHWpBWrY6Lc8G4WXZQWFUz1q/SHqZhOiUfRZqAW9SRKm88WSdWnviztBK9rTbpIZppmowNAtqkIyXTrkifOhFt+cMcuhglrbYOUi0XiEv1JA0BpkQVabgqNAG9ZXML5YflUPi10q78h+q8SkNtFwOVriCf2fkwafbUp6HSsGBDg56WikLPBmZuS9Ubk53rO5AeTMiAP6PW0N18WThEZ0v7YsG8vZnx0QMUjav0tnoXabXsyREl0LCgT3C8HgQZTIQZafIpARH7FRXrP4lUlSitP6K5jj4OWTekPA7Byk9pqkjZXTmnUf956wbzSn0/+sXHH8cfXxEEQRAEQRAEQRAEQRAEQRAEQRAEQX7IPzAHXpPUiQqlAAAAAElFTkSuQmCC"}></img>
        </div>
        <form onSubmit={formSubmit}>
        <div className="newhotelconimg">
            <label htmlFor='hotelimg'><span>Select Images of Hotel:</span><div><HotelIcon></HotelIcon></div></label>
            <input type='file' multiple id='hotelimg' style={{display:'none'}} onChange={e=>setFiles(e.target.files)}></input>
        </div>

        {hotelitems.map((item)=>(
            <div className="hotelconfields" key={item.id}>
            <label>{item.heading}</label>
            <input type={item.type} placeholder={item.placeholder} id={item.id} onChange={e=>setFields(prev=>({...prev,[e.target.id]:e.target.value}))}></input>
        </div>
        ))}
        <div className="formfeatures">
            <label>Featured</label>
            <select id='featured' onChange={e=>setFields(prev=>({...prev,[e.target.id]:e.target.value}))}>
                <option value={false}>No</option>
                <option value={true}>Yes</option>
            </select>
        </div>

        <div className="formrooms">
            <div>Rooms:</div>
            <select multiple id='rooms' onChange={handleselectrooms}>
                {data.map((room)=>(
                    <option key={room._id}>{room?.title}</option>
                ))}
            </select>
        </div>
        <button>Send</button>
        </form>
       </div>
             </div>
        </div>
      </div>
    )
}