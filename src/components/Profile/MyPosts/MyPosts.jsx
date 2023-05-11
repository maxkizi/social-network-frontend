import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from 'react';


const MyPosts = (props) => {
    const isAvailableChangePostData = props.currentUserId !== props.profileState.profileData.id
    let onDeletePost = (postId) => {
        const profileDataCopy = JSON.parse(JSON.stringify(props.profileState.profileData))
        profileDataCopy.posts = profileDataCopy.posts.filter(post => post.id !== postId)
        props.updateProfile(profileDataCopy)
    }

    let postElements = props.profileState.profileData.posts.map(post => <Post text={post.text}
                                                                              id={post.id}
                                                                              isAvailableChangePostData={isAvailableChangePostData}
                                                                              onDeletePost={onDeletePost}/>)

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

    return (
        <div className={s.myPosts}>
            <div>
                <div>
                    <textarea hidden={isAvailableChangePostData} ref={newPostElement} value={props.profileState.newPostText}
                              onChange={onPostTextAreaChange}/>
                </div>
                <div>
                    <button hidden={isAvailableChangePostData} onClick={onAddPost}>Add post</button>
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