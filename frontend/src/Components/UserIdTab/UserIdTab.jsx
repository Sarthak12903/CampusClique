import React from 'react'
import ProfilePic from'../../assets/GradientIcons/ProfilePic.png'
const UserIdTab = () => {
  return (
    <div className='absolute bottom-[0px] left-0 
                flex items-center gap-2
                bg-black px-3 py-2 rounded-xl text-white'>
        <img src={ProfilePic} alt="PP"  className='h-12 w-12'/>
        <div>
            <p className='truncate'>Alina Pathan</p>
            <p className='flex-1 truncate max-w-[100px]'>JSPM's BSIOTR, Wagholi,Pune</p>
        </div>
    </div>
  )
}

export default UserIdTab