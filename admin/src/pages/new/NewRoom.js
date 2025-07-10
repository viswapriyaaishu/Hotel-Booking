import {useState,useEffect} from 'react'
import HotelIcon from '@mui/icons-material/Hotel';
import { hotelitems } from '../../components/Form/hotelForm';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Navbar } from '../../components/Navbar/Navbar';
import '../new/NewRoom.scss'
import axios from 'axios';
import { useFetch } from '../../components/useFetch/useFetch';
import { useNavigate } from 'react-router-dom';
import { roomitems } from '../../components/Form/roomForm';
export const NewRoom=()=>{
    
  const [files,setFiles]=useState([])
  const [fields,setFields]=useState({})
  const [roomsselected,setroomsselected]=useState([])
  const [hotelselected,setHotelselected]=useState([])
  const {data,loading,error}=useFetch("/hotels")
 const handleTextAreasec=(e)=>{
        const list=e.target.value.split(",").map((it)=>({rno:it}))
        setroomsselected(list)
    }
  const nav=useNavigate()
  
  const formSubmit=async(e)=>{
    e.preventDefault()

    try{
       const listres={...fields,roomno:roomsselected}
await axios.post(`/rooms/${hotelselected}`,listres,{withCredentials:true})
nav(-1)
    }
    catch(err)
    {
        console.log(err)
    }
    
  }
  console.log(roomsselected)
    return(
      <div className="outerconofroom">
        <Sidebar></Sidebar>
        <div className="innerconofroom">
            <Navbar></Navbar>
             <div className="newroombaap">
                <p>Add New Room</p>
                <div className="newroomcon">
        
        <form onSubmit={formSubmit}>
       

        {roomitems.map((item)=>(
            <div className="roomconfields" key={item.id}>
            <label>{item.heading}</label>
            <input type={item.type} placeholder={item.placeholder} id={item.id} onChange={e=>setFields(prev=>({...prev,[e.target.id]:e.target.value}))}></input>
        </div>
        ))}
        <div className="hotelidRooms">
            <div>Choose a Hotel</div>
            <select id='hotelid' onChange={e=>setHotelselected(e.target.value)}>
                {data && data.map((hotelitem)=>(
                    <option key={hotelitem._id} value={hotelitem._id}>{hotelitem.name}</option>
                ))}
            </select>
        </div>

        <div className="roomsarea" style={{marginLeft:"340px"}}>
            <div >Rooms:</div>
            <textarea placeholder='Enter room numbers separated by commas' id='roomno' onChange={handleTextAreasec}></textarea>
        </div>
        <button>Send</button>
        </form>
       </div>
             </div>
        </div>
      </div>
    )
}