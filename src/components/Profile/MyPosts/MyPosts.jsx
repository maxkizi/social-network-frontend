import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from 'react';


const MyPosts = (props) => {
    let postElements = props.postData.map(post => <Post text={post.postText}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        debugger
        const action = {
            type: 'ADD_POST'
        }
        props.dispatch(action)
    }

    let onPostTextAreaChange = () => {
        let newText = newPostElement.current.value
        let action = {
            type: 'UPDATE_NEW_POST_TEXT',
            newPostText: newText
        }
        props.dispatch(action)
    }

    return (
        <div className={s.myPosts}>
            My posts
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostTextAreaChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts