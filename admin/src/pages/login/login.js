
import './login.scss'
import axios from 'axios'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../components/context/Usercontext.js'
export const Login = () => {
  const nav=useNavigate()
const[field,setField]=useState({
  email:undefined,
  password:undefined
})
const [error ,setError]=useState(false)
const {dispatch1}=useContext(UserContext)

const handleFields=(e)=>{
  
  setField(prev=>({...prev,[e.target.id]:e.target.value}))
}
const subform=async(e)=>{
  e.preventDefault()

  dispatch1({type:"LOGIN_START"})
  try{
    const res=await axios.post("/login/logins",field)
    if(res.data.isAdmin){
      dispatch1({type:"LOGIN_SUCCESS",payload:res.data.details})
      nav("/")
    }
    else{
      dispatch1({type:"LOGIN_FAILURE",payload:{message:"You are not allowed"}})
      setError("You are not allowed")
    }
  }
  catch(err){
    const errmsg=err?.response?.data?.message || err.message
    dispatch1({type:'LOGIN_FAILURE',payload:errmsg})
    setError(errmsg)
  }
  
}
// console.log(field)
  return (
    <div className="login">
      <div className="loginwrap">
        <form onSubmit={subform}>
    <div className="emailfield">
          <div className='email' >Email</div>
          <input type="text" id='email' onChange={handleFields}>
          </input>
        </div>

        <div className="pwdfield">
          <div className='password' >Password</div>
          <input type="password" id='password' onChange={handleFields}></input>
        </div>

        <button type='submit'>Submit</button>
        {error && <div style={{color:"red",fontSize:"15px"}}>{error}</div>}
        </form>
      </div>
    </div>
  )
}


