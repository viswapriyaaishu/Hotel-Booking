import { createContext, useReducer } from "react"

const INITIAL_STATE={
    darkmode:false
}

export const darkContext=createContext(INITIAL_STATE)

const darkReducer=(state,action)=>{
    switch(action.type){
        case "LIGHT_MODE":{
            return {darkmode:false}
        }

        case "DARK_MODE":{
            return {darkmode:true}
        }

        case "TOGGLE":{
            return {darkmode:!state.darkmode}
        }
    }
}

export const DarkProvider=({children})=>{
    const [state,dispatch]=useReducer(darkReducer,INITIAL_STATE)

    return(
        <darkContext.Provider value={{darkmode:state.darkmode,dispatch}}>
        {children}
        </darkContext.Provider>
    )
}