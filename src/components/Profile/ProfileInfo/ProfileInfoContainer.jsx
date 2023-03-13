import React from 'react';
import {connect} from "react-redux";
import {setProfileData} from "../../../redux/profile-reducer";
import ProfileInfo from "./ProfileInfo";
import Preloader from "../../Common/Preloader";
import {withRouter} from "../../../redux/redux-store";

class ProfileInfoRestContainer extends React.Component {

    componentDidMount() {
        let id = this.props.router.params.userId

        if (!id) {
            id = this.props.currentUserId
        }
        this.props.setProfileData(id)
    }

    render = () => {
        if (!this.props.profileData) {
            return <Preloader/>
        }
        return (
            <ProfileInfo {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profileData: state.profileState.profileData,
        currentUserId: state.authState.currentUserId
    }
}

const mapDispatchToProps = {
    setProfileData
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileInfoRestContainer))