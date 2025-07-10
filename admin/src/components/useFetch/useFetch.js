import {useState,useEffect} from 'react'
import axios from 'axios'
export const useFetch=(url)=>{
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    const[error,setError]=useState(false)
    useEffect(()=>{
        const fetch=async()=>{
            setLoading(true)
            try{
                const res=await axios.get(url)
                setData(res.data)
            }
            catch(err)
            {
                setError(err)
            }
            setLoading(false)
        }
        fetch()
    },[url])
    const refetch=async()=>{
            setLoading(true)
            try{
                const res=await axios.get(url)
                setData(res.response.data)
            }
            catch(err)
            {
                setError(err)
            }
            setLoading(false)
        }

        return {data,loading,error,refetch}
}