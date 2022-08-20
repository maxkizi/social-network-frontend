import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <ProfileInfo/>
                <MyPosts/>
            </div>
        </div>
    )
}

export default Profile