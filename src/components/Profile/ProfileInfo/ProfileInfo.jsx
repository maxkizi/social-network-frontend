import s from "./ProfileInfo.module.css";
import emptyAvatar from '../../../assets/images/userAvatar.jpg';

const ProfileInfo = (props) => {
    const data = props.profileData;
    return (
        <div>
            <div>
                <img className={s.mainImage}
                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&usqp=CAU'/>
            </div>
            <div className={s.avaAndDescBlock}>
                <div>
                    <img src={data.userPhotoUrl? data.userPhotoUrl: emptyAvatar}/>
                </div>
                <div>
                    First name: {data.firstName}
                </div>
                <div>
                    Last name: {data.lastName}
                </div>
                <div>
                    Country: {data.country}
                </div>
                <div>
                    Followed: {data.followed.toString()}
                </div>
                <div>
                    Info: {data.info}
                </div>
                <div>
                    Status: {data.status}
                </div>

            </div>
        </div>
    )
}

export default ProfileInfo