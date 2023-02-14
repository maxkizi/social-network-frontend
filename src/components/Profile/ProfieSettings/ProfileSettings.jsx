const ProfileSettings = (props) => {
    const signOut = () => {
        props.signOut()
    }

    return (
        <div>
            <div>
                username: {props.username}
            </div>
            <div>
                <button onClick={signOut}>sign-out</button>
            </div>
        </div>
    )
}

export default ProfileSettings