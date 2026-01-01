import UserIdTab from '../UserIdTab/UserIdTab'
import { MdEdit } from "react-icons/md";
const ProfileTab = () => {
    return (
        <div className='relative w-full h-[220px] rounded-xl bg-red-200'>
            {/* User Pic and name  */}
            <UserIdTab />
            {/* Followers -Following  */}
            <div className='followersFollowingCard rounded-xl bg-white/40
 absolute bottom-[0px] left-[50%] -translate-x-1/6
 h-14 w-auto px-2 font-semibold text-black text-sm flex justify-center gap-2 items-center '>
                <div className='flex flex-col justify-center items-center'><p>41</p><p>Following</p></div>
                <div className='flex flex-col justify-center items-center'><p>41</p><p>Followers</p></div>
                
            </div>
            {/* Edit  */}
            <MdEdit className='absolute bottom-[7px] right-2 h-6 w-6 text-white ' />

        </div>
    )
}

export default ProfileTab