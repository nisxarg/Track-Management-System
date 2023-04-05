import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'; 
import {homePageData1} from '../data/dummy'

const Home = (props) => {
  const currYear = props.year 
  const { currentColor } = useStateContext();
  let content
  let a = homePageData1.data.map((value)=>{
    // console.log(value.year)
    if(value.year == currYear)
    {
      content = value.content
      
    }
    console.log(content)
   })

   console.log(content)
  return (
    <div>
     <div
      className=" rounded-t-2xl md:flex p-4 mt-3 mr-3 ml-3"
      style={{ backgroundColor: currentColor }}
    >      <p className="text-2xl text-white font-semibold mt-8">  {props.year}</p>
    </div>
    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-b-2xl md:flex  mb-3 mr-3 ml-3 ">
      <p>Here we will be having the paragraph</p>

   
    </div>
    </div>
   
  )
}

export default Home


