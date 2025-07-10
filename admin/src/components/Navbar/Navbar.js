import './Navbar.scss'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ZoomInMapSharpIcon from '@mui/icons-material/ZoomInMapSharp';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { useContext } from 'react';
import { darkContext } from '../context/StyleContext';
import { UserContext } from '../context/Usercontext';

export const Navbar=()=>{

    const {dispatch}=useContext(darkContext)
    const {dispatch1}=useContext(UserContext)
    return(
        <div className='navbarcomp'>
        <div className="navbarwrap">
           <div className="searchnav">
            <div> <input type='search' placeholder='search'></input></div>
           <div className="icon1"><SearchOutlinedIcon/></div>
           <div></div>
           </div>

           <div className='navits'>
            <div className="icon2"><LanguageOutlinedIcon></LanguageOutlinedIcon> English</div>
            <div className="icon2"><DarkModeOutlinedIcon onClick={()=>{dispatch({type:"TOGGLE"})}}></DarkModeOutlinedIcon></div>
            <div className="icon2"><ZoomInMapSharpIcon/></div>
            <div className="icon2"><NotificationsOutlinedIcon/><span className='notificationText'>1</span></div>
            <div className="icon2"><ChatBubbleOutlineOutlinedIcon/><span className='chatText'>2</span></div>
            <div className="icon2"><ListOutlinedIcon/></div>
            <div className='avatar' onClick={()=>{dispatch1({type:"LOGOUT"})}}></div>
           </div>
        
        </div>
        <hr></hr>
        </div>
    )
}