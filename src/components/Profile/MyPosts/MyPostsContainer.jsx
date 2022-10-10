import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

/*const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {
            (store) => {
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
        }
    </StoreContext.Consumer>
}*/

const mapStateToProps = (state) => {
    return {
        postData: state.profileState.posts,
        newPostText: state.profileState.newPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updatePostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer