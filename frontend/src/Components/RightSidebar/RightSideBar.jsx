import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import RightProfilePanel from '../RightProfilePanel/RightProfilePanel';

const RightSideBar = () => {
  return (
   <div className="hidden md:flex md:w-[25%] xl:w-[22%] h-[100%] flex flex-col px-3 py-10 gap-4 bg-gray-300">
   <RightProfilePanel/>
   <div className='w-[260px] h-[100px] border-2 border-green-400 rounded-xl'></div>
   <div className='w-[260px] h-[100px] border-2 border-green-400 rounded-xl'></div>
  </div>
    
  )
}

export default RightSideBar