import React, {useState} from "react";

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false)

    let [status, setStatus] = useState(props.profileData.status)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false)

        const profileDataCopy = JSON.parse(JSON.stringify(props.profileData))
        profileDataCopy.status = status
        props.updateProfile(profileDataCopy)
    }

    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <div>
            {!editMode &&
                <div>
                        <span
                            onDoubleClick={activateEditMode}>{props.profileData.status || 'no status'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <textarea onChange={onChangeStatus} onBlur={deActivateEditMode}/>
                </div>
            }
        </div>
    )


}

export default ProfileStatus