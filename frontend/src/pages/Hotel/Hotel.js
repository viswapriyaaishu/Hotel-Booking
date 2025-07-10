import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Header } from "../../components/Header/Header.js"
import { Navbar } from "../../components/Navbar/navbar.jsx"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { Maillist } from "../../components/mailList/maillist"
import { Footer } from "../../components/footer/footer"
import '../Hotel/Hotel.css'
import {useContext, useState} from 'react'
import { useLocation } from "react-router-dom"
import { useFetch } from "../../components/useFetch/useFetch.js"
import { useParams } from "react-router-dom"
import { DateContext } from "../../context/DateContext.js"
import { Roombooking } from "../../components/RoomBooking/Roombooking.js"
export const Hotel=()=>{
    
    const{id:hotelid}=useParams()
    const {data,loading,err}=useFetch(`/hotels/${hotelid}`)
    const imgsarr=[
        {src:"https://www.oberoihotels.com/-/media/oberoi-hotels/Home-Detail/udaivilas.png"},
        {src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/28759044.jpg?k=4a3e476214895d86a0e71808d9eb5b85acaebe0cbff06bbd2ecdbb3054d98600&o=&hp=1"},
        {src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/31211348.jpg?k=c469403df80f10e33120c7be42b61d458746716a4e04c62ad4b9afc1c22edc98&o=&hp=1"},
        {src:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/26/65/7d/the-oberoi-new-delhi.jpg?w=900&h=500&s=1"},
        {src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp9EDxXSJgXJxHsgI68I-Fn7MTZG6kjUM3Dw&s"},
        {src:"https://media-cdn.tripadvisor.com/media/photo-s/05/1b/a6/d7/oberoi-hotel.jpg"}
    ]

    const [openslider,setOpenslider]=useState(false)
    const [modal,setModal]=useState(false)
    const [slideNo,setSlideNo]=useState(0)
    const slideImgs=(i)=>{
        setSlideNo(i)
        setOpenslider(true)
    }

    const handleDir=(dir)=>{
        let sno;
        if( dir==='l'){
            sno=slideNo===0?5:slideNo-1;
        }
        else{
            sno=slideNo===5?0:slideNo+1
        }
        setSlideNo(sno)
    }

    const {dates,options}=useContext(DateContext)

    const millis=24*60*60*1000
    const getDiffDates=(sdate,edate)=>{
        
        const datedif=Math.abs(new Date(edate).getTime()-new Date(sdate).getTime())
        const datesgap=Math.ceil(datedif/millis)
        return datesgap
    }

    const thatdatevar=getDiffDates(dates[0]?.startDate,dates[0]?.endDate)

    
    const handleroombook=()=>{
        setModal(true)
    }
    return(
        <>
        <Navbar></Navbar>
        <Header type="req"></Header>
        <div className="hotcon">
           {openslider &&
            <div className="slider">
                <FontAwesomeIcon icon={faCircleXmark} className="xmark" onClick={()=>setOpenslider(false)}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faCircleArrowLeft} onClick={()=>handleDir('l') } className="cal"></FontAwesomeIcon>
                <div className="swrapper">
                <img src={data.photos?data.photos[slideNo]:""} alt=""></img>
                </div>
                <FontAwesomeIcon icon={faCircleArrowRight} onClick={()=>handleDir('r')} className="car"></FontAwesomeIcon>
            </div>}
            {data &&
            <div className="hotcowrap">
            <div className="hotcop1">
        <div className="lllpart">
                <h1>{data.name}</h1>
                <div className="locpt"><FontAwesomeIcon icon={faLocationDot}> </FontAwesomeIcon>
                <span>5 Lane, Gandhipet,Mumbai</span></div>
                <div>Excellent Place - 500m from airport</div>
                <div>Book a stay for {thatdatevar} nights and get free discount vouchers</div>
            </div>
            <div className="rrrpart"><button onClick={handleroombook}>Reserve or Book Now!</button></div>
            </div>

            <div className="hotcop2">
            {data.photos?.map((it,i)=>(
                <div className="imgwrapper" key={i}>
                    <img src={it} alt="alt" onClick={()=>slideImgs(i)}></img>
                </div>
            ))}
            </div>

            <div className="hotcop3">
                <div className="hotcop3lp">
                    <h2>Heart of {data?.city}</h2>
                    <p>{data?.desc}</p>
                </div>
                <div className="hotcop3rp">
                    <div>Perfect for a week stay</div>
                    <div>Heart of Mumbai rated {data?.rating}</div>
                   <div>
                     <div>${data?.cheapPrice *options.rooms*thatdatevar} </div>
                    <span>({thatdatevar} day)</span>
                   </div>
                    <button className="hotbtn" onClick={handleroombook}>Reserve or Book Now!</button>
                </div>
            </div>
            {modal ? <Roombooking hotelid={hotelid} setModal={setModal}></Roombooking>:""}
        </div>
            }
        <Maillist></Maillist>
        <Footer></Footer>
        </div>
        
        </>
    )
}