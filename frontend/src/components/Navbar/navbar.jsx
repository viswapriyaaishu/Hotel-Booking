import React, { useContext,useState } from "react"
import '../Navbar/navbar.css'
import {Link} from "react-router-dom"
import { UserContext } from "../../context/UserContext"
export const Navbar=()=>{
    const [showlogout,setShowlogout]=useState(false)
    const {user,loading,error,dispatch}=useContext(UserContext)
    const logoutfunc=()=>{
        dispatch({type:"LOGOUT"})

        console.log(user)
    }
    return(
        <div className="navbarcomp">
        <div className="navcon">
            <Link to='/' style={{color:'inherit',textDecoration:'none'}}><span>BookTrips</span></Link>
            {user ? <span style={{color:'white',position:'relative',cursor:"pointer"}} onClick={()=>{setShowlogout(prev=>!prev)}}>{user?.email?.split("@")[0]} {showlogout ? <div className='loggedcon' style={{backgroundColor:'white',position:'absolute',top:'20px',height:"50px",color:"black",width:"60px",cursor:"pointer"}}>
                <div className="loggedwrap">
                    <div onClick={logoutfunc}>logout</div>
                </div>
            </div>:""}</span> : <div className="btngr">
            <Link to='/login'><button className="btngrp">Login</button></Link>
            <button className="btngrp">Register</button>
            </div>}
        </div>
        </div>
    )
}