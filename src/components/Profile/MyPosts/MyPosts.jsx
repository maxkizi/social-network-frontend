import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from 'react';
import PostForm from "./PostForm";


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
    let addPost = (postData) => {
        const profileDataCopy = JSON.parse(JSON.stringify(props.profileState.profileData))
        profileDataCopy.posts.push({text: postData.text})
        props.updateProfile(profileDataCopy)
    }

    return (
        <div className={s.myPosts}>
            <div hidden={isAvailableChangePostData}>
                <PostForm onSubmit={addPost}/>
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