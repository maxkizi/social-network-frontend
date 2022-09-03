import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div className={s.profile}>
            <div>
                <ProfileInfo/>
                <MyPosts postData={props.profileState.posts}
                         newPostText={props.profileState.newPostText}
                         dispatch={props.dispatch}/>
            </div>
        </div>
    )
}

export default Profile