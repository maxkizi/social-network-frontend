import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from 'react';


const MyPosts = (props) => {
    let postElements = props.postData.map(post => <Post text={post.text}/>)

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostTextAreaChange = () => {
        let newText = newPostElement.current.value
        props.updatePostText(newText)
    }

    const isAvailableAddPost = props.currentUserId !== props.currentProfileId

    return (
        <div className={s.myPosts}>
            <div>
                <div>
                    <textarea hidden={isAvailableAddPost} ref={newPostElement} value={props.newPostText} onChange={onPostTextAreaChange}/>
                </div>
                <div>
                    <button hidden={isAvailableAddPost} onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div>
                My posts:
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts