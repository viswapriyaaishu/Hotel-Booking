import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../RoomBooking/Roombooking.css'
import { useFetch } from '../useFetch/useFetch'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import {useContext, useState} from 'react'
import { DateContext } from '../../context/DateContext'
import axios from "axios"
import {useNavigate} from "react-router-dom"
export const Roombooking = ({hotelid,setModal}) => {
    const nav=useNavigate()
    const [selectedChecks,setSelectedChecks]=useState([])
    const {data,loading,error}=useFetch(`/hotels/listrooms/${hotelid}`)
    const {dates}=useContext(DateContext)
    const handleChecks=(e)=>{
        const checked=e.target.checked
        const value=e.target.value

        setSelectedChecks(checked ? [... selectedChecks,value]:selectedChecks.filter((it)=>it!==value))
    }
    
    const dateChecker=(sd,ed)=>{
        const nd=new Date(sd)
        let listofdates=[]
        while(nd<ed)
        {
            listofdates.push(new Date(nd).getTime())
            nd.setDate(nd.getDate()+1)
        }
        return listofdates
    }
const bookdateschoose=dateChecker(dates[0].startDate,dates[0].endDate)

    const reservedStatus=(roomnum)=>{
        const isAva=roomnum.unavailable_dates.some((dat)=>{
            return bookdateschoose.includes(new Date(dat).getTime())
        })

        return !isAva
    }

    const reserveclick=async()=>{
        try{
           await Promise.all(
            selectedChecks.map((checkid)=>{
            const avarooms=axios.put(`/rooms/availability/${checkid}`,{dates:bookdateschoose})
                nav("/")
            return avarooms.data
           }
        )
           )
        }
        catch(err)
        {
            return error.message
        }
    }
  return (
    loading ?"loading data":<div className="rbookscon">
        <div className="rbookswrap">
            <FontAwesomeIcon icon={faCircleXmark} onClick={()=>{setModal(false)}} className='closesym'></FontAwesomeIcon>
            <h1>Select Rooms</h1>
        {data && 
        data?.map((room)=>
        {
            return <div className='roomscon' key={room._id}>
                <div className="roomsit1">
                    
                    <div className='roomisit1left'>
                        <div className='rtitle'>{room.title} room</div>
                        <div>{room.desc}</div>
                        <div>maxpeople:{room.maxPeople}</div>
                        <div>${room.price}</div>
                        </div>
                        
                    <div className='roomisit1right'>
                        {room.roomno.map((num,i)=>(
                            <div key={i}>
                             
                                    <label>{num.rno}</label>
                            <input type='checkbox' onChange={handleChecks} value={num._id} disabled={!reservedStatus(num)}></input>
                                
                               
                                </div>
                        ))}

                        </div>   
                       
                </div>
            </div>
        }
        )
        
        }
     <button style={{backgroundColor:"#0071c2",width:"80%",padding:"20px"}} onClick={reserveclick}> Reserve the Room</button> 
        
        </div>
    </div>
      )
}


