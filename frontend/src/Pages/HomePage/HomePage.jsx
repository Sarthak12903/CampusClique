import CreatePost from "../../Components/CreatePost/CreatePost";
import Post from "../../Components/Post/Post"
export default function HomePage() {
  return (
    <div className="py-4  px-10 w-full">
      <CreatePost/>
      <Post/>
      <Post/>
      
    </div>
  );
}
