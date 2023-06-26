import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.profileData.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })

        const profileDataCopy = JSON.parse(JSON.stringify(this.props.profileData))
        profileDataCopy.status = this.state.status
        this.props.updateProfile(profileDataCopy)
    }

    onChangeStatus = (e) => {
        this.setState({status: e.currentTarget.value})
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span
                            onDoubleClick={this.activateEditMode}>{this.props.profileData.status || 'no status'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <textarea onChange={this.onChangeStatus} onBlur={this.deActivateEditMode}/>
                    </div>
                }
            </div>
        )
    }


}

export default ProfileStatus