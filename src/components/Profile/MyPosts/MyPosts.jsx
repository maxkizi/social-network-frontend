import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from 'react';


const MyPosts = (props) => {
    let postElements = props.profileState.profileData.posts.map(post => <Post text={post.text}/>)

    let newPostElement = React.createRef()

    let onAddPost = () => {
        const newPost = {text: props.profileState.newPostText}
        const profileDataCopy = JSON.parse(JSON.stringify(props.profileState.profileData))
        profileDataCopy.posts.push(newPost)
        props.updateProfile(profileDataCopy)
    }

    let onPostTextAreaChange = () => {
        let newText = newPostElement.current.value
        props.updateNewPostText(newText)
    }

    const isAvailableAddPost = props.currentUserId !== props.profileState.profileData.id

    debugger
    return (
        <div className={s.myPosts}>
            <div>
                <div>
                    <textarea hidden={isAvailableAddPost} ref={newPostElement} value={props.profileState.newPostText}
                              onChange={onPostTextAreaChange}/>
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