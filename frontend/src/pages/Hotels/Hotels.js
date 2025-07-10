import { Header } from "../../components/Header/Header.js"
import { Navbar } from "../../components/Navbar/navbar.jsx"
import {DateRange} from "react-date-range"
import { format } from "date-fns"
import { useLocation } from "react-router-dom"
import '../Hotels/Hotels.css'
import { useState } from "react"
import { Hotelitems } from "../../components/HotelItems/hotelitems.js"
import { useFetch } from "../../components/useFetch/useFetch.js"
export const Hotels=()=>
{
    const loc=useLocation()
   
    const [openDate,setOpendate]=useState(false)
    const [mini,setMini]=useState(undefined)
    const [maxi,setMaxi]=useState(undefined)

    const {data,loading,err,refetch}=useFetch(`/hotels?min=${mini}&max=${maxi}&city=${loc.state.dest}`)
    return(
        <>
        <Navbar></Navbar>
        <Header type="req" style={{zIndex:301}}></Header>
        <div className="hotelscon">
            <div className="hotelswrap">
                <div className="leftpart">
                    <h1>Search</h1>
                    <div className="parts">
                        <div className="part1">
                            <label>Destination</label>
                            <input type="text" placeholder={loc.state.dest}></input>
                        </div>

                        <div className="part2">
                            <label>Check-in-Date</label>
                            <div className="cdate" onClick={()=>{setOpendate(!openDate)}}>{`${format(loc.state.date[0].startDate,"MM/dd/yyyy")} to ${format(loc.state.date[0].endDate,"MM/dd/yyyy")}`}</div>
                           {openDate &&  <div><DateRange ranges={loc.state.date} minDate={new Date()}></DateRange></div>}
                        </div>

                        <div className="part3">
                            <label>Options</label>
                            <div className="opits">
                            <div className="opit1">
                                <div >Min price <small>per night</small></div>
                                <input type="text" className="prices" onChange={(e)=>setMini(e.target.value)}></input>
                            </div>

                            <div className="opit1">
                                <div>Max price <span><small>per night</small></span></div>
                                <input type="text" className="prices" onChange={(e)=>setMaxi(e.target.value)}></input>
                            </div>

                            <div className="opit1">
                                <div>Adult</div>
                                <input type="number" className="ntype" placeholder={loc.state.options["adult"]}></input>
                            </div>
                            <div className="opit1">
                                <div>Children</div>
                                <input type="number"  className="ntype"placeholder={loc.state.options["children"]}></input>
                            </div>
                            <div className="opit1">
                                <div>Rooms</div>
                                <input type="number" className="ntype" placeholder={loc.state.options["rooms"]}></input>
                            </div>
                            </div>
                        </div>
                    </div>
                    <button className="srchbtn" onClick={()=>{refetch()}}>Search</button>
                </div>
                <div className="rpart">
                    {loading?"loading hotels":<Hotelitems data={data}></Hotelitems>}
                </div>
            </div>
        </div>
        </>
    )
}