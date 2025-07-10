import DataTable from "../../components/DataTable/Datatable"
import { Navbar } from "../../components/Navbar/Navbar"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import './List.scss'
import '@mui/x-data-grid'
import { Link } from "react-router-dom"
export const List=({form,categoryType})=>{
    return(
        <div className="listswrap">
           <Sidebar></Sidebar>

           <div className="listcon">
            <Navbar></Navbar>

            <div className="listheaders">
                    <div>{categoryType=='users'?'Users':categoryType=='hotels'?'Hotels':'Rooms'}</div>
                   <Link to={categoryType=='users'?'/users/new':categoryType=='hotels'?'/hotels/new':'/rooms/new'} style={{color:"inherit", textDecoration:"none"}}><div> Add New</div></Link> 
                </div>
            <div className="listit1">
                
                <DataTable form={form} categoryType={categoryType}></DataTable></div>
           </div>
        </div>
    )
}