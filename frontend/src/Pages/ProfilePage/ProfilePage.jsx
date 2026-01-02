import ProfileDescription from "../../Components/ProfileDescription/ProfileDescription";
import ProfileTab from "../../Components/ProfileTab/ProfileTab";
import SecondaryGradientButton from "../../Components/SecondaryGradientButton/SecondaryGradientButton";
import Post from '../../Components/Post/Post'
export default function ProfilePage() {
  return (
    <div className="py-4  max-sm:px-5 sm:px-20 md:px-0 w-full md:w-[35%]">
      <ProfileTab/>
      <ProfileDescription/>
      <div className="flex p-2 items-center justify-center gap-2 mt-2">
        <SecondaryGradientButton buttonName="Posts" onClick={()=>{console.log("my post are showing")}}/>
        <SecondaryGradientButton buttonName="Bookmarks" onClick={()=>{console.log("bookmarks post are showing")}}/>
        <SecondaryGradientButton buttonName="Liked" onClick={()=>{console.log("liked post are showing")}}/>
       
      </div>
     <Post className='mx-2'/>

    </div>
  );
}
