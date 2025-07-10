import '../FeaturedProperty/featuredproperty.css'
import { useFetch } from '../useFetch/useFetch.js'

export const Featuredproperty=()=>{
    const imgs=[
        {url:"https://media-cdn.tripadvisor.com/media/photo-s/05/1b/a6/d7/oberoi-hotel.jpg"},
        {url:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/370564672.jpg?k=4f37af06c05a6f5dfc7db5e8e71d2eb66cae6eec36af7a4a4cd7a25d65ceb941&o=&hp=1"},
        {url:"https://group.accor.com/-/media/Corporate/our-brands/Images-for-pages/25hours/25H-Dubai.jpg?rev=3cdc7799b3f644189f42c2535047e3eb"},
        {url:"https://www.kayak.co.in/rimg/kimg/d1/04/08d793fa28a68cda.jpg?width=1366&height=768&crop=true"}
    ]

    const {data,loading,error}=useFetch("/hotels?limit=4")
    return(
        <div className="fpty">
        {loading?"loading items":<div className="fpitems">
            {data.map((dat,i)=>(
                <div className="fpitem" key={dat._id}>
                <img src={dat.photos[0]} alt=""></img>
                <div className="fpitdes">
                    <div>{dat?.name}</div>
                    <div>{dat?.city}</div>
                    <div>Starting from {dat?.cheapPrice}</div>
                    
                    <div className="rating">
                        <button>{dat?.rating}</button>
                        <span>{dat?.title}</span>
                    </div>
                </div>
            </div>
            ))}

        </div>}
        </div>
    )
}