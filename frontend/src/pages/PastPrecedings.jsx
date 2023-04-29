import React,{useState} from 'react'
import { links} from '../data/dummy'
import { useStateContext } from "../contexts/ContextProvider";
import { Navbar } from "../components";



const PastPrecedings = () => {
const { currentColor,setsidebarData } = useStateContext();

  setsidebarData(links); 

  return (
    <>
    
    <Navbar />
    <div>
      PastPrecedings

    </div>
    </>
  )
}

export default PastPrecedings
