import { SlPicture } from "react-icons/sl";
import ProfilePic from '../../assets/GradientIcons/ProfilePic.png'
import dummyPost from"../../assets/Images/dummyPost.jpg"
const Post = () => {
  return (
    
   <div className='bg-[#1e1e1e] border-2 text-white border-[#34D399] px-5 py-4 my-6 mx-2 rounded-xl'>
    <div className='flex flex-col '>
        {/* Uploaders details  */}
        <div className='flex justify-start gap-4 p-3 items-center '>
             <img src={ProfilePic} alt="PP" className='h-8 w-8 rounded-full' />
             <div>
                <p className='font-semibold text-sm'>John Doe</p>
                <p className='text-gray-400 text-xs'> Posted : 12th June 2024</p>
             </div>
        </div>
        {/* Main Content Section   */}
        <div className="px-4 ">
            <p className="text-sm px-2">Lorem ipsum dolor sit, 
                amet consectetur adipisicing elit.
                 Neque recusandae quasi dolor iste 
                expedita ipsa accusamus omnis? Iste,
                 atque doloribus! Debitis, neque tempore.
            </p>
            <img src={dummyPost} alt="DP" className='w-[80%] h-auto max-sm:h-40 max-sm:m-2 sm:h-60 m-4 rounded-xl'/>

        </div>
        {/* reaction */}
        <div className="flex items-center justify-evenly px-6 py-2 bg-[1e1e1e]">
            <SlPicture className='h-6 w-6 rounded-lg text-gray-400'/>
            <SlPicture className='h-6 w-6 rounded-lg text-gray-400'/>
            <SlPicture className='h-6 w-6 rounded-lg text-gray-400'/>
            <SlPicture className='h-6 w-6 rounded-lg text-gray-400'/>
                  
        </div>

    </div>
  

    </div>
  )
}

export default Post