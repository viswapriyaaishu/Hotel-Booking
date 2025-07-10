import './Sidebar.scss'
import WindowIcon from '@mui/icons-material/Window';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import '@mui/icons-material/Window'
import HotelIcon from '@mui/icons-material/Hotel';
import RoomIcon from '@mui/icons-material/Room';
import { Link } from 'react-router-dom';
import { darkContext } from '../context/StyleContext';
import { useContext } from 'react';
import { UserContext } from '../context/Usercontext';
export const Sidebar = () => {
    const {dispatch}=useContext(darkContext)
    const {dispatch1}=useContext(UserContext)
    return (
        <div className='sidebar'>
            <div className="topsidebar"><Link to='/' style={{color:"inherit", textDecoration:"none"}}><div >ViswaAdmin</div></Link>
                </div>
            <hr></hr>
            <div className="centersidebar">
                <div className='main'>
                    <p>MAIN</p>
                    <div className="mainitems">
                        <ul>
                            
                        <li className='iconparent'><div className="icon"><WindowIcon/></div>Dashboard</li>
                        </ul>  
                       </div>
                </div>
                <div className='lists'>
                    <p>LISTS</p>
                    <div className="listitems">
                        <div className='iconparent'><div className="icon"><PersonOutlinedIcon/></div> <Link to='/users' style={{color:"inherit", textDecoration:"none"}}>Users</Link></div>
                        <div className='iconparent'><div className="icon"><HotelIcon></HotelIcon></div><Link to='/hotels' style={{color:"inherit", textDecoration:"none"}}>Hotels</Link></div>
                        <div className='iconparent'><div className="icon"><RoomIcon></RoomIcon></div><Link to='/rooms' style={{color:"inherit", textDecoration:"none"}}>Rooms</Link></div>
                        <div className='iconparent'><div className="icon"><LocalShippingIcon></LocalShippingIcon></div>Delivery</div>
                    </div>
                </div>
                <div className='useful'>
                    <p>USEFUL</p>
                    <div className='usefulitems'>
                        <div className='iconparent'><div className="icon"><BarChartIcon></BarChartIcon></div>Stats</div>
                        <div className='iconparent'><div className="icon"><NotificationsNoneOutlinedIcon></NotificationsNoneOutlinedIcon></div>Notifications</div>
                    </div>
                </div>

                <div className="service">
                    <p>SERVICE</p>
                    <div className="serviceitems">
                        <div className='iconparent'><div className="icon"><SettingsSystemDaydreamOutlinedIcon></SettingsSystemDaydreamOutlinedIcon></div>System Health</div>
                        <div className='iconparent'><div className="icon"><PsychologyOutlinedIcon></PsychologyOutlinedIcon></div>Logs</div>
                        <div className='iconparent'><div className="icon"><SettingsApplicationsOutlinedIcon></SettingsApplicationsOutlinedIcon></div>Settings</div>
                    </div>
                </div>

                <div className="user">
                    <p>USER</p>

                    <div className="useritems">
                        <div className='iconparent'><div className="icon"><AccountCircleOutlinedIcon></AccountCircleOutlinedIcon></div>Profile</div>
                        <div className='iconparent' onClick={()=>{dispatch1({type:"LOGOUT"})}}><div className="icon" ><ExitToAppOutlinedIcon></ExitToAppOutlinedIcon></div>Logout</div>
                    </div>
                </div>

                <div className='colorchanger'>
                <div onClick={()=>{dispatch({type:"LIGHT_MODE"})}}></div>
                <div onClick={()=>{dispatch({type:"DARK_MODE"})}}></div>
                </div>
            </div>
            <div className="bottomsidebar"></div>
        </div>
    )
}