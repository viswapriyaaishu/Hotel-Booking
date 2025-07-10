import { Chart } from "../../components/chart/Chart"
import DataTable from "../../components/DataTable/Datatable"
import { Navbar } from "../../components/Navbar/Navbar"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import { Tablecomp } from "../../components/table/table"
import './ListItem.scss'

export const ListItem=()=>{
    return(
        <div className="listitem">
            <Sidebar></Sidebar>
            <div className="listitemcon">
                <Navbar></Navbar>

                <div className="listitemsmaincon">
                    <div className="topcon">
                        <div className="leftcon">
                            <div className="editb">Edit</div>
                            <div className="leftconchild">
                                <p>Information</p>
                            <div className="leftconit">
                                <div className="imgcon">
                                    <img src="data:image/webp;base64,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"></img>
                                </div>

                                <div className="leftconit1">
                                    <div className="letit">Radha Rani</div>
                                    <div className="leem"><div className="leemk">Email:</div><div className="leemv">moroca@gmail.com</div></div>
                                    <div className="leph"><div className="lephk">Phone:</div><div className="lephv">+91 89009999</div></div>
                                    <div className="leadd"><div className="leaddk">Address:</div><div className="leaddv">F-90 nualm apt , Switzerland</div></div>
                                    <div className="leco"><div className="lecok">Country:</div><div className="lecov">USA</div></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="rightcon">
                            <Chart aspect={3/1} title="User Spending ( Last 6 Months)"></Chart>
                        </div>
                    </div>
                    <div className="bottomcon">
                        <div className="bottomcontit">Last Transactions</div>
                        <Tablecomp></Tablecomp>
                    </div>
                </div>
            </div>
        </div>
    )
}