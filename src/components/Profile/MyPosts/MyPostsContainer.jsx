import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {
    const store = props.store

    const addPost = () => {
        store.dispatch(addPostActionCreator())
    }

    const updatePostText = (text) => {
        store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <MyPosts postData={store.getState().profileState.posts}
                 newPostText={store.getState().profileState.newPostText}
                 addPost={addPost}
                 updatePostText={updatePostText}/>
    )
}

export default MyPostsContainer