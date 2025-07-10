import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed,faTaxi,faPlane, faCar, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons';
import{format} from "date-fns"
import {DateRange} from "react-date-range"
import '../Header/Header.css'
import {useContext, useState} from "react"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; 
import { useNavigate } from 'react-router-dom';
import { DateContext } from '../../context/DateContext';
import { UserContext } from '../../context/UserContext';
export const Header=({type})=>{
    const {user}=useContext(UserContext)
    const[date,setDate]=useState([{
        startDate:new Date(),
        endDate:new Date(),
        key:"selection"
    }])
    const[dest,setDest]=useState({})
    const[opendate,setOpendate]=useState(false)

    const[options,setOptions]=useState({
        adults:1,
        children:0,
        rooms:1
    })
    const [openOptions,setOpenoptions]=useState(false)

    const handleOperation=(ch,op)=>{
        setOptions((prev)=>{
            return{
                ...prev,
                [ch]:op==='i'?options[ch]+1:options[ch]-1
            }
        })
        
    }

    const navigate=useNavigate()
        const navToUrl=(url)=>{
            dispatch({type:"NEW_SEARCH",payload:{dest,dates:date,options}})
            navigate(url,{state:{dest,date,options}})
        }

        const {dispatch}=useContext(DateContext)
    return(
        <div className="header">
            <div className={type==='req'?'headerwrapper':'headerwrap'}>
                <div className="wrapitems">
                    <div className="wrapitem active"><FontAwesomeIcon icon={faBed} className="fontawesome "/><span>Stays</span></div>
                    <div className="wrapitem"><FontAwesomeIcon icon={faPlane} className="fontawesome"></FontAwesomeIcon><span>Flights</span></div>
                    <div className="wrapitem"><FontAwesomeIcon icon={faCar} className="fontawesome"></FontAwesomeIcon><span>Car Rentals</span></div>
                    <div className="wrapitem"><FontAwesomeIcon icon={faBed} className="fontawesome"></FontAwesomeIcon><span>Attractions</span></div>
                    <div className="wrapitem"><FontAwesomeIcon icon={faTaxi} className="fontawesome"></FontAwesomeIcon><span>Taxis</span></div>
                </div>
                {type!=='req' &&
                <div><h1 className="h1tit">A Lifetime of discounts. Great Choice</h1>
                <p className="h1para">Get rewarded for your travels unlock instant savings of 10% or more with this flightbooking</p>
                {!user ?<button className="sigbtn">SignIn/Register</button>:""}

                <div className="searchwrap">
                    <div className="sswit">
                        <FontAwesomeIcon icon={faBed}></FontAwesomeIcon>
                        <input type="text" placeholder="Search here" onChange={e=>setDest(e.target.value)}></input></div>
                   <div className="sswit"> 
                    <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>
                    <span onClick={()=>setOpendate(!opendate)}>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                   {opendate &&  <DateRange editableDateInputs={true} moveRangeOnFirstSelection={false} ranges={date} onChange={e=>setDate([e.selection])} className="datechooser"></DateRange>}</div>
                   <div className="sswit">
                    <FontAwesomeIcon icon={faPerson}></FontAwesomeIcon>
                    <div className="sswitperson" onClick={()=>setOpenoptions(!openOptions)}>
                        <div>Adults :{options.adults}</div>
                    <div>Children :{options.children}</div>
                    <div>Rooms :{options.rooms}</div>
                    </div>
                    {openOptions && <div className="oplist">
                        <div className="oplistit">
                        <span>Adults</span>
                        <div className="oplistitcho">
                            <button disabled={options.adults<=1} onClick={()=>{handleOperation("adults",'d')}}>-</button>
                            <div>{options.adults}</div>
                            <button onClick={()=>{handleOperation("adults",'i')}}>+</button>
                        </div>
                        </div>
                         <div className="oplistit">
                        <span>Children</span>
                        <div className="oplistitcho">
                            <button disabled={options.children<=0} onClick={()=>{handleOperation("children",'d')}}>-</button>
                            <div>{options.children}</div>
                            <button onClick={()=>{handleOperation("children",'i')}}>+</button>
                        </div>
                        </div>
                         <div className="oplistit">
                        <span>Rooms</span>
                        <div className="oplistitcho">
                            <button disabled={options.rooms<=1} onClick={()=>{handleOperation("rooms",'d')}}>-</button>
                            <div>{options.rooms}</div>
                            <button onClick={()=>{handleOperation("rooms",'i')}}>+</button>
                        </div>
                        </div>
                        </div>}
                   </div>
                   <div className="sswit">
                    <button className="sswitbtn" onClick={()=>navToUrl("/hotels")}>Search</button>
                   </div>
                </div></div>}
            </div>
        
        </div>
    )
}