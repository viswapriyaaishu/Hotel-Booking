import { Link } from 'react-router-dom'
import '../HotelItems/hotelitems.css'
export const Hotelitems=({data})=>{

    
    return(
        <div className="pparts">
           {data.map((dat,i)=>(
            <div className="ppart1" key={dat._id}>
             <div className="llpart">
                <img src={dat.photos[0]} className="ppimg" alt=""></img>
            </div>
            <div className="mmpart">
                <div className="pp1">{dat?.name}</div>
                <div className="pp2">{dat?.distance} from Airport</div>
                <div className="pp3">Free Airport Taxi</div>
                <div className="pp4">{dat?.title}</div>
                <div className="pp5">{dat?.desc}</div>
                <div className="pp6">Free cancellation</div>
                <div className="pp7">You can cancel later, so lock in this great price today!</div>
            </div>
            <div className="rrpart">
                <div className="rp1">
                    <div className="rp11">Excellent</div>
                    <div className="rp12">{dat?.rating}</div>
                </div>
                <div className="anowrap">
                    <div className="rp2">${dat?.cheapPrice}</div>
                <div className="rp3">Include taxes and fees</div>
                <Link to={`/hotel/${dat._id}`}><button className="ava">See availability</button></Link>
                </div>
            </div>
           </div>
           ))
           }
        </div>
    )
}