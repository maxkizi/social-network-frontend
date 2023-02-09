import React from 'react';
import {connect} from "react-redux";
import axios from "axios";
import {setProfileData} from "../../../redux/profile-reducer";
import ProfileInfo from "./ProfileInfo";
import Preloader from "../../Common/Preloader";
import {withRouter} from "../../../redux/redux-store";

class ProfileInfoContainer extends React.Component {

    __sendRequest = () => {
        let id = this.props.router.params.userId

        if (!id) {
            id = 1
        }
        axios.get('http://localhost:8080/api/v1/profile/' + id).then(response => {
            this.props.setProfileData(response.data)
        })
    }

    componentDidMount() {
        this.__sendRequest()
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
        profileData: state.profileState.profileData
    }
}

const mapDispatchToProps = {
    setProfileData
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileInfoContainer))