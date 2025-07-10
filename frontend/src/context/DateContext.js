import {createContext, useReducer, useState} from 'react'

const INITIAL_STATE={
    dest:undefined,
    dates:[],
    options:{
        adults:undefined,
        children:undefined,
        rooms:undefined
    }
}

export const DateContext=createContext(INITIAL_STATE)

const DateReducer=(state,action)=>{
    switch(action.type)
    {
        case 'NEW_SEARCH':
            return action.payload
        case 'RESET_SEARCH':
            return INITIAL_STATE
        default:
            return state
    }
}

export const DateProvider=({children})=>{
    const [state,dispatch]=useReducer(DateReducer,INITIAL_STATE)

    return(<DateContext.Provider value={{dest:state.dest,dates:state.dates,options:state.options,dispatch}}>
        {children}
        </DateContext.Provider>)

}