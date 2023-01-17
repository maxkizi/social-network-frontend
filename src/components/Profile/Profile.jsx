import s from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";


const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <ProfileInfoContainer/>
                <MyPostsContainer/>
            </div>
        </div>
    )
}

export default Profile