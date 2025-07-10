import { createContext, useReducer ,useEffect} from "react"

const INITIAL_STATE={
    user:JSON.parse(localStorage.getItem("user")),
    loading:false,
    error:null
}

export const UserContext=createContext(INITIAL_STATE)

const userReducer=(state,action)=>{
    switch(action.type){
        case "LOGIN_START":{
            return {
                user:null,
                loading:true,
                error:null
            }
        }

        case "LOGIN_SUCCESS":{
            return {
                user:action.payload,
                loading:false,
                error:null
            }
        }

        case "LOGIN_FAILURE":{
            return {
                user:null,
                loading:false,
                error:action.payload
            }
        }
        case "LOGOUT":{
            return{
                user:null,
                loading:false,
                error:null
            }
        }
    }
}

export const UserProvider=({children})=>{

    const [state,dispatch]=useReducer(userReducer,INITIAL_STATE)

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(state.user))
    },[state.user])

    return (<UserContext.Provider value={{user:state.user,loading:state.loading,error:state.error,dispatch}}>
        {children}
    </UserContext.Provider>)
}