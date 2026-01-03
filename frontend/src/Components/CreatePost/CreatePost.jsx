import React from 'react'
import { SlPicture } from "react-icons/sl";
import PrimaryGradientButton from '../PrimaryGradientButton/PrimaryGradientButton';
import ProfilePic from "../../assets/GradientIcons/ProfilePic.png"
const CreatePost = () => {
  return (
    <div className='bg-[#1e1e1e] border-2 border-[#34D399] p-2 rounded-xl'>

      <div className='flex justify-around max-md:justify:center p-4 items-center gap-3 my-2'>
        <img src={ProfilePic} alt="PP" className='h-8 w-8 rounded-full' />
        <input
          type="text"
          placeholder="What's on your mind?"
          className="flex-1 max-sm: h-8 text-md pl-4 rounded-xl max-md:text-sm bg-gray-600 text-gray-300 outline:none focus:outline-none focus:ring-2 focus:ring-[#00E5A8]"/>
       <PrimaryGradientButton buttonName="POST" onClick={()=>{console.log("POST button of create post clicked")}}/>
      </div>
      <div className='flex items-center px-20 justify-start gap-6 mb-2'>
       <SlPicture className='h-8 w-8 rounded-lg text-gray-400'/>
       <SlPicture className='h-8 w-8 rounded-lg text-gray-400'/>
       <SlPicture className='h-8 w-8 rounded-lg text-gray-400'/>
       <SlPicture className='h-8 w-8 rounded-lg text-gray-400'/>
       <SlPicture className='h-8 w-8 rounded-lg text-gray-400'/>
       <SlPicture className='h-8 w-8 rounded-lg text-gray-400'/>
      
      </div>
    </div>
  )
}

export default CreatePost