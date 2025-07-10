import {useEffect,useState} from 'react'
import axios from "axios"
export const useFetch=(url)=>{
  const [data,setData]=useState([])
  const [loading,setLoading]=useState(false)  
  const [err,setErr]=useState(false)
useEffect(()=>{
const fetch=async()=>{
setLoading(true)

try{
    const weburl=await axios.get(url)
    setData(weburl.data)
}
catch(err)
{
    setErr(err)
}
setLoading(false)
}
fetch()
},[])

const refetch=async()=>{
    setLoading(true)
    try{
        const weburl=await axios.get(url)
        setData(weburl.data)
    }
    catch(err)
    {
        setErr(err)
    }
    setLoading(false)
}
return {data,loading,err,refetch}
}