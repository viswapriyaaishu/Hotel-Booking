import React from 'react'
import './widget.scss'
import '@mui/icons-material/Window'
import {useState,useEffect} from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

import { KeyboardArrowDownOutlined } from '@mui/icons-material';
export const Widget = ({type}) => {
const [amt,setamt]=useState(null)
const [hike,sethike]=useState(null)
  useEffect(()=>{
    
  },[])
    let data;

    switch(type){
        case 'users':{
            data={
                name:"USERS",
                rating:false,
                link:"See all users",
                sym:(<PersonIcon className='icon3' style={{color:"crimson",backgroundColor:"rgba(255,0,0,0.2)"}}></PersonIcon>)
            }
            break;
        }

        case 'products':{
            data={
                name:"PRODUCTS",
                rating:false,
                link:"View all products",
                sym:(<ShoppingCartOutlinedIcon className='icon3' style={{color:"goldenrod",backgroundColor:"rgba(218,165,32,0.2)"}}></ShoppingCartOutlinedIcon >)
            }
             break;
        }
        case 'earnings':{
            data={
                name:"EARNINGS",
                rating:true,
                link:"View net earnings",
                sym:(<CurrencyExchangeOutlinedIcon className='icon3' style={{color:"green",backgroundColor:"rgba(0,128,0,0.2)"}} ></CurrencyExchangeOutlinedIcon>)
            }
             break;
        }
        case 'balance':{
            data={
                name:"BALANCE",
                rating:true,
                link:"See details",
                sym:(<AccountBalanceWalletOutlinedIcon className='icon3' style={{color:"purple",backgroundColor:"rgba(128,0,128,0.2)"}}></AccountBalanceWalletOutlinedIcon>)
            }
             break;
        }

        default:
             break;
    }
  return (
    <div className='widget'>
      <div className="leftwidget">
        <div className='leftwidgetname'>{data.name}</div>
        <div className='leftwidgetrating'>{data.rating && '$'}{amt}</div>
        <div className='leftwidgetlink'>{data.link}</div>
      </div>
      <div className="rightwidget ">
        {hike >0 ?<div className='cartprices' style={{color:"green"}}><div><KeyboardArrowUpOutlinedIcon></KeyboardArrowUpOutlinedIcon></div>
      <div >{hike}%</div></div>:<div className='cartprices' style={{color:"red"}}><div><KeyboardArrowDownOutlined></KeyboardArrowDownOutlined></div> <div>{hike}%</div></div>}
      
      
      <div className='symbol'>{data.sym}</div>
      </div>
    </div>
  )
}


