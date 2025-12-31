import { SlPicture } from "react-icons/sl";
import ProfilePic from '../../assets/GradientIcons/ProfilePic.png'
import dummyPost from"../../assets/Images/dummyPost.jpg"
const Post = () => {
  return (
    
   <div className='bg-[#1e1e1e] border-2 px-10 py-4 my-6 rounded-xl'>
    <div className='flex flex-col '>
        {/* Uploaders details  */}
        <div className='flex justify-start gap-4 p-2 items-center '>
             <img src={ProfilePic} alt="PP" className='h-12 w-12 rounded-full' />
             <div>
                <h3 className='font-semibold'>John Doe</h3>
                <p className='text-gray-400 text-sm'> Posted : 12th June 2024</p>
             </div>
        </div>
        {/* Main Content Section   */}
        <div className="px-4 py-2">
            <p>Lorem ipsum dolor sit, 
                amet consectetur adipisicing elit.
                 Neque recusandae quasi dolor iste 
                expedita ipsa accusamus omnis? Iste,
                 atque doloribus! Debitis, neque tempore.
            </p>
            <img src={dummyPost} alt="DP" className='w-full h-80 mt-3 rounded-xl'/>

        </div>
        {/* reaction */}
        <div className="flex items-center justify-evenly px-6 py-2 bg-[1e1e1e]">
            <SlPicture className='h-8 w-8 rounded-lg text-gray-400'/>
                   <SlPicture className='h-8 w-8 rounded-lg text-gray-400'/>
                   <SlPicture className='h-8 w-8 rounded-lg text-gray-400'/>
                   <SlPicture className='h-8 w-8 rounded-lg text-gray-400'/>
                   <SlPicture className='h-8 w-8 rounded-lg text-gray-400'/>
        </div>

    </div>

    </div>
  )
}

export default Post