import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import './Datatable.scss'
import { Link, useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useFetch } from '../useFetch/useFetch';
import axios from 'axios'
const Usercolumns = [
  { field: 'id', headerName: 'ID', width: 100,renderCell:(props)=><div>{props.row._id}</div>} ,
  { field: 'name', headerName: 'User', width: 250 ,renderCell:(props)=><div className='avacon'><div className='avaimg'><img src={props.row.img} ></img></div><div className='avatit'>{props.row.name}</div></div>},
  { field: 'email', headerName: 'Email', width: 190 },
  {
    field: 'phoneno',
    headerName: 'Phone No.',
    type: 'number',
    width: 140,
  },
  
  {
    field: 'city',
    headerName: 'City',
    width:200,
  
    
  },
 {
    field: 'country',
    headerName: 'Country',
    width:100,
  
    
  }
  
];

const hotelcolumns = [
  { field: 'id', headerName: 'ID', width: 100,renderCell:(props)=><div>{props.row._id}</div> },
  { field: 'title', headerName: 'Title', width: 250 },
 
  
  {
    field: 'name',
    headerName: 'Name',
    width:200,
  
    
  },
 {
    field: 'type',
    headerName: 'Type',
    width:100,
  
    
  },
 
  {
    field:"city",
    headerName:"City",
    dta:120
  }
  
];

const roomcolumns = [
  { field: '_id', headerName: 'ID', width: 100,renderCell:(props)=><div>{props.row._id}</div> },
  { field: 'title', headerName: 'Title', width: 250},
 
  
  {
    field: 'desc',
    headerName: 'Description',
    width:200,
  
    
  },
 {
    field: 'maxPeople',
    headerName: 'Max People',
    width:100,
  
    
  },
 
  {
    field:"price",
    headerName:"Price",
    dta:120
  }
  
];
const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable({form,categoryType}) {
 
  const [dataset,Setdataset]=useState([])
  const loc=useLocation()
  const path=loc.pathname.split('/')[1]
  console.log(path)
 const {data,loading,error}=useFetch(`/${path}`)

  useEffect(()=>{
    Setdataset(data)

  },[data])

  const deletefunc=async(id,cty)=>{
  
      try{

        Setdataset(dataset.filter((it)=>it._id!==id))
        await axios.delete(`/${path}/${id}`)
      }
      catch(err)
      {
        console.log(err)
      }
    }

    
  
  const anocol=[
     {field:"action",headerName:"Action",width:250,renderCell:(params)=>{
        return <div className='actionbtn'>
            <div className='viewbtn'><Link style={{textDecoration:'none'}}><span>View</span></Link></div>
            <div className="updbtn"><Link style={{textDecoration:'none'}} ><span>Update</span></Link></div>
            <div className='delbtn' style={{cursor:"pointer"}} onClick={()=>deletefunc(params.row._id,form.categoryType)}><span>Delete</span></div>

        </div>
     }}
]
  return (
    <Paper sx={{ height: 750, width: '100%',backgroundColor:"#333" }} className='paper'>
  <DataGrid
    rows={dataset}
    columns={categoryType=='users'?Usercolumns.concat(anocol):categoryType=='hotels'?hotelcolumns.concat(anocol):roomcolumns.concat(anocol)}
    initialState={{
      pagination: {
        paginationModel: { page: 0, pageSize: 9 }
      }
    }}
    pageSizeOptions={[9]}
    checkboxSelection
    rowHeight={60} // Adjust if your custom cell is taller
    sx={{ border: 0 }}

    className='givena'
    getRowId={(row)=>row._id}
  />
</Paper>

  );
}