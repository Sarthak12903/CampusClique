import CreatePost from "../../Components/CreatePost/CreatePost";
import Post from "../../Components/Post/Post"
export default function HomePage() {
  return (
    <div className="py-4  max-sm:p-x-20 sm:px-5 w-full md:w-[35%]">
      <CreatePost/>
      <Post/>
      <Post/>
      
    </div>
  );
}
