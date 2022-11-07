import User from "./User/User";

const initialUsers = [
    {id: 1, name: 'Dmitry', followed: true, status: 'some status', location: {country: 'Russia', city: 'Moscow'}},
    {id: 2, name: 'Maxim', followed: false, status: 'some status', location: {country: 'Russia', city: 'Kirov'}},
    {id: 3, name: 'Anton', followed: true, status: 'some status', location: {country: 'Belarus', city: 'Minsk'}}
]

let Users = (props) => {
    debugger
    if (props.users.length === 0) {
        props.setUsers(initialUsers)
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