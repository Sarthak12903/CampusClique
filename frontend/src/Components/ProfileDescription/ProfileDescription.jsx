import React from 'react'
import { MdOutlinePlace } from "react-icons/md";
const ProfileDescription = () => {
    return (
        <div className='text-white'>
            <p className='w-full h-auto p-2 text-sm md:text-md'>Lorem ipsum, dolor sit amet consectetur adipisicing elitrdrtegfdhtru Voluptatibus cupiditate excepturi</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 p-2 text-sm sm:text-md">

                {/* Row 1 - Column 1 */}
                <div className="flex items-center gap-2">
                    <MdOutlinePlace />
                    <p className='truncate'>Pune, Maharashtra, India</p>
                </div>

                {/* Row 1 - Column 2 */}
                <div className="flex items-center gap-2">
                    <MdOutlinePlace />
                    <p>22 March, 2024</p>
                </div>

                {/* Row 2 - Column 1 */}
                <div className="flex items-center gap-2">
                    <MdOutlinePlace />
                    <p className='truncate'>linkedinlink</p>
                </div>

                {/* Row 2 - Column 2 */}
                <div className="flex items-center gap-2">
                    <MdOutlinePlace />
                    <p className='truncate'>github link</p>
                </div>

            </div>
        </div>
    )
}

export default ProfileDescription