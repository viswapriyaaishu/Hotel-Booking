import '../Featured/featured.css'
import { useFetch } from '../useFetch/useFetch.js'

export const Featured=()=>{
    const {data,loading,error}=useFetch("/hotels/countByCity/count?cities=dubai,mumbai,hyderabad,chennai")
    return(
        <div className="featuredwrap">
            {loading ?"Loading items":
            <div className="fitems">
                <div className="fit">
                    <img src="https://images.trvl-media.com/lodging/20000000/19460000/19458500/19458493/8cf0d468.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill" alt=""></img>

                    <div className="fitdes">
                        <h1>Mumbai</h1>
                        
                        <h2>{data[1]} properties</h2>
                    </div>
                </div>
                <div className="fit">
                    <img src="https://images.trvl-media.com/lodging/2000000/1850000/1845100/1845022/a7c16ded.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill" alt=""></img>
                    <div className="fitdes">
                        <h1>Hyderabad</h1>
                        
                        <h2>{data[2]} properties</h2>
                    </div>
                </div>
                <div className="fit">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG9A5lrin8Ix1kqnXlFd2YjCjjeZVGAsHuZQ&s"></img>
                    <div className="fitdes">
                        <h1>Dubai</h1>
                       
                        <h2>{data[0]} properties</h2>
                    </div>
                </div>
                <div className="fit"><img src="https://cdn.sanity.io/images/ocl5w36p/prod5/e414ed83dc3dda21df244bd2477d1c5d1065a323-1720x1112.jpg?w=768&auto=format&dpr=2"></img>
                <div className="fitdes">
                        <h1>Chennai</h1>
                        
                        <h2>{data[3]} properties</h2>
                    </div></div>
            </div>
 } </div>
    )
}