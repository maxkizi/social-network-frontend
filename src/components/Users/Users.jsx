import User from "./User/User";
import axios from "axios"
import React from "react";

class Users extends React.Component {

    constructor(props) {
        super(props);
        axios.get("http://localhost:8080/api/v1/users").then(response => {
            debugger
            this.props.setUsers(response.data)
        })
    }

    __mapUsers() {
        return (
            this.props.users.map(u => <User id={u.id}
                                            name={u.name}
                                            followed={u.followed}
                                            status={u.status}
                                            location={u.location}
                                            follow={this.props.follow}
                                            unfollow={this.props.unfollow}/>)
        )
    }

    render = () => {
        return (
            <div>
                {this.__mapUsers()}
            </div>
        )
    }
}


export default Users