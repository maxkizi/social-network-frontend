import React from 'react';
import {connect} from "react-redux";
import axios from "axios";
import {setProfileData} from "../../../redux/profile-reducer";
import ProfileInfo from "./ProfileInfo";

class ProfileInfoContainer extends React.Component {

    __sendRequest = () => {
        axios.get('http://localhost:8080/api/v1/profile/1').then(response => {
            this.props.setProfileData(response.data)
        })
    }

    componentDidMount() {
        this.__sendRequest()
    }

    render = () => {
        if (!this.props.profileData) {
            return <></>
        }
        return (
            <ProfileInfo {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profileData: state.profileState.profileData
    }
}

const mapDispatchToProps = {
    setProfileData
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfoContainer)
// export default ProfileInfoContainer