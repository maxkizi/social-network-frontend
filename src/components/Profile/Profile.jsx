import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <ProfileInfo/>
                <MyPostsContainer />
            </div>
        </div>
    )
}

export default Profile