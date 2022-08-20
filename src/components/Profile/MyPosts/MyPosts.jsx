import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postData = [
        {
            postId: 1,
            postText: 'My first post'
        },
        {
            postId: 2,
            postText: 'My second post'
        }
    ]

    let postElements = postData.map(post => <Post text={post.postText}/>)

    return (
        <div className={s.myPosts}>
            My posts
            <div>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts