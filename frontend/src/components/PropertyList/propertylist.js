import '../PropertyList/propertylist.css'
import { useFetch } from '../useFetch/useFetch.js'
export const Propertylist=()=>{
const {data,loading,error}=useFetch("/hotels/countByType/count")

const imgs=[
  {url:"https://images.trvl-media.com/lodging/20000000/19460000/19458500/19458493/8cf0d468.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"} ,
  {url:"https://images.trvl-media.com/lodging/2000000/1850000/1845100/1845022/a7c16ded.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"} ,
  {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG9A5lrin8Ix1kqnXlFd2YjCjjeZVGAsHuZQ&s"},
  {url:"https://cdn.sanity.io/images/ocl5w36p/prod5/e414ed83dc3dda21df244bd2477d1c5d1065a323-1720x1112.jpg?w=768&auto=format&dpr=2"},
  {url:"https://cdn.sanity.io/images/ocl5w36p/prod5/e414ed83dc3dda21df244bd2477d1c5d1065a323-1720x1112.jpg?w=768&auto=format&dpr=2"}
]
    return(
        <div className="plistwrap">
            {loading?"loading items":(data && <>
            <div className="plistits">
              {imgs.map((imgurl,i)=>(
                 <div className="pit" key={i}>
                    <img src={imgurl.url} alt=""></img>

                    <div className="pitdes">
                        <h1>{data[i]?.type}</h1>
                        
                        <h2>{data[i]?.count} {data[i]?.type}</h2>
                    </div>
                </div>
              ))}
                
            </div> </>)}
        </div>
    )
}