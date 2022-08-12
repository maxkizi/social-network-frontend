import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <Post text='My first post'/>
                <Post text='My second post'/>
            </div>
        </div>
    )
}

export default MyPosts