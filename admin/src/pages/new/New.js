import { Navbar } from "../../components/Navbar/Navbar"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import './New.scss'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import '@mui/icons-material'
import axios from 'axios'
import { useState,useEffect } from "react";

import {useNavigate} from "react-router-dom"
export const New=({data,title,categoryType})=>{
    const nav=useNavigate()
 const [file,setfile]=useState("")
    const [dataset,setDataset]=useState({})
    const [progtrack,setProgtrack]=useState(null)
    
    const submitItem=async(e)=>{
        e.preventDefault()
        const imgdata=new FormData()
            imgdata.append("file",file)
            imgdata.append("upload_preset","upload")
        try{
             const res=await axios.post('https://api.cloudinary.com/v1_1/dlcimnrkc/image/upload',imgdata)
             const {url}=res.data

             const newUser={...dataset,img:url}

            await axios.post("/login/register",newUser)
            nav(-1)
        }
        catch(err)
        {
            console.log(err)
        }
    }
   
    return(
<div className="newpages1">
    <Sidebar></Sidebar>
        <div className="newpagescon1">
            <Navbar></Navbar>

            <div className="newpageits">
                <div className="newpagetit">{title}</div>
                <div className="bhoochal">
                    <div className="bhooimg"><img src={file ?URL.createObjectURL(file):"https://uploads-us-west-2.insided.com/figma-en/attachment/4eff69f49b3448726d1d9d500c55be5975f65cd7.jpg"}></img></div>
                  <form onSubmit={submitItem} className="bhoolformcon">
                     
                        <div className="bhoolformconit1">
                            <div>Image</div>
                            <div>
                                <label htmlFor='folder'><DriveFolderUploadOutlinedIcon ></DriveFolderUploadOutlinedIcon></label>
                                <input type='file' style={{display:"none"}} id='folder' onChange={e=>setfile(e.target.files[0])}></input>
                            </div>
                        </div>
                        
                         {data && data.map((item1,i)=>
                        <div className="bhoolformconit2" key={i}>
                            <label>{item1.heading}</label>
                            <input type={item1.type} placeholder={item1.placeholder} id={item1.id} onChange={(e)=>{setDataset(prev=>({...prev,[e.target.id]:e.target.value})) }}></input>
                        </div>)}
                        <button type='submit' className="submitUser" disabled={progtrack !==null && progtrack<100 } style={{cursor:"pointer"}}>Send</button>
                        
                  </form>
                   
                </div>
            </div>
        </div>
    
</div>
    )
}