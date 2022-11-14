import User from "./User/User";
import  axios from "axios"

const initialUsers = [
    {id: 1, name: 'Dmitry', followed: true, status: 'some status', location: {country: 'Russia', city: 'Moscow'}},
    {id: 2, name: 'Maxim', followed: false, status: 'some status', location: {country: 'Russia', city: 'Kirov'}},
    {id: 3, name: 'Anton', followed: true, status: 'some status', location: {country: 'Belarus', city: 'Minsk'}}
]

let Users = (props) => {
    if (props.users.length === 0) {
        axios.get("http://localhost:8080/api/v1/users").then(response => {
            debugger
            props.setUsers(response.data)
        })
    }
    const users = props.users.map(u => <User id={u.id}
                                             name={u.name}
                                             followed={u.followed}
                                             status={u.status}
                                             location={u.location}
                                             follow={props.follow}
                                             unfollow={props.unfollow}/>)
    return (
        <div>
            {users}
        </div>
    )
}

export default Users