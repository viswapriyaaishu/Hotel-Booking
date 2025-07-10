import { Navbar } from "../../components/Navbar/Navbar"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import { Widget } from "../../components/widgets/widget"
import { CircularProgressbar } from "react-circular-progressbar"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import './Home.scss'
import "react-circular-progressbar/dist/styles.css"
import  {Chart } from "../../components/chart/Chart";
import { Tablecomp } from "../../components/table/table";


export const Home=()=>{
    return(
        <div className='homecomp'>
            <Sidebar></Sidebar>
            <div className="homeitems"><Navbar></Navbar>
             <div className="widgetscon">
                <Widget type='users'></Widget>
                <Widget type='products'></Widget>
                <Widget type='earnings'></Widget>
                <Widget type='balance'></Widget>
           </div>
            <div className="charts">
                <div className="chart1">
                    <div className="chart1c1"><div>Total Revenue</div><MoreVertOutlinedIcon></MoreVertOutlinedIcon></div><div className="chartcon">
                        <CircularProgressbar strokeWidth={3} value={30} text={'30%'} className='cprogress'></CircularProgressbar></div>
                        <div className="chartdesc">
                            <div>Total Sales made today</div>
                            <div className='dol' style={{fontSize:'23px',fontWeight:"500"}}>$200</div>
                            <div style={{fontSize:'15px',textAlign:"center",color:"gray"}}>Previous transactions processing,last payments may not be included</div>

                            <div className="chartits">
                                <div className="chartit1">
                                    <div className="chartit1tit">Target</div>
                                    <div className="chartit1icon pos"><KeyboardArrowUpOutlinedIcon></KeyboardArrowUpOutlinedIcon>
                                    <div>$12.4k</div></div>
                                </div>
                                <div className="chartit1">
                                    <div className="chartit1tit">Last Week</div>
                                    <div className="chartit1icon neg"><KeyboardArrowDownOutlinedIcon></KeyboardArrowDownOutlinedIcon>
                                    <div>$12.4k</div></div>
                                </div>
                                <div className="chartit1">
                                    <div className="chartit1tit">Last Month</div>
                                    <div className="chartit1icon neg"><KeyboardArrowDownOutlinedIcon></KeyboardArrowDownOutlinedIcon>
                                    <div>$12.4k</div></div>
                                </div>
                            </div>
                        </div>
                        
                        </div>
                
                <div className="chart2">
                    <div><Chart aspect={2/1} title="Last 6 Months (Revenue)"></Chart></div>
                </div>
            </div>

                <div className="table">
                    <p>Latest Transactions</p>
                    <Tablecomp></Tablecomp>
                </div>
            </div>
</div>
    )
}