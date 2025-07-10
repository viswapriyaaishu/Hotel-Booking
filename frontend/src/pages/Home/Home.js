import { useEffect,useState } from "react"
import { Featured } from "../../components/Featured/featured"
import { Featuredproperty } from "../../components/FeaturedProperty/featuredproperty"
import { Footer } from "../../components/footer/footer"
import { Header } from "../../components/Header/Header"
import { Maillist } from "../../components/mailList/maillist"
import { Navbar } from "../../components/Navbar/navbar"

import { Propertylist } from "../../components/PropertyList/propertylist"
import { AnimatePresence } from "framer-motion"

export const Home=()=>{
   
    return(
        <div>
            
            <Navbar></Navbar>
            <Header></Header>
            <div className="homeCon" style={{display:"flex", alignItems:"center",flexDirection:"column"}}>
                <Featured></Featured>
                <h1 style={{marginLeft:'0px'}}>Browse By Property Type</h1>
                <Propertylist></Propertylist>

                <h1>Home guests Love</h1>
                <Featuredproperty></Featuredproperty>
                <Maillist></Maillist>
                <Footer></Footer>
            </div>
       
        
        </div>
    )
}