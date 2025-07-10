import { useContext, useState } from 'react'
import '../login/login.css'
import { UserContext } from '../../context/UserContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export const Login=()=>{
    const {dispatch,error}=useContext(UserContext)
    const [cred,setCred]=useState({
        email:undefined,
        password:undefined
    })
    const handleipfield=(e)=>{
        setCred((prev)=>{return {...prev,[e.target.id]:e.target.value}})
    }

    const btnClick=async(e)=>{
        e.preventDefault()
        dispatch({type:"LOGIN_START"})

    try{
        const response=await axios.post('/login/logins',cred)
        dispatch({type:"LOGIN_SUCCESS",payload:response.data.details})
       console.log(response.data.details)
        nav("/")
    }
    catch(err)
    {
       dispatch({type:"LOGIN_FAILURE",payload:err.response.data})
    }
    }

    const nav=useNavigate()
    return(
        <div className='logincon'>
            <div className="loginwrap">
                <div className="lsecondwrap">
                    <div className="emailfield">
                    <label>Enter email</label>
                    <input type='text' placeholder="email" onChange={handleipfield} id='email'></input>
                </div>

                <div className="pwdfield">
                    <label>Enter password</label>
                    <input type='password' placeholder='password' onChange={handleipfield} id='password'></input>
                </div>

                <button onClick={btnClick} className='signinbtnverify'>Sign In</button>
                </div>
                {error && <div>{error.message}</div>}
            </div>
        
        </div>
    )
}