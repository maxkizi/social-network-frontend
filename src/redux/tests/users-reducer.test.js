import usersReducer, {followSuccess, setUsers, unfollowSuccess} from "../users-reducer";


const unfollowedUserId = 3
const followedUserId = 4
const usersState = {
    users: [{
        "id": unfollowedUserId,
        "userPhotoUrl": null,
        "firstName": "Anna",
        "lastName": "Ivanova",
        "country": "Russia",
        "isFollow": false
    }, {
        "id": followedUserId,
        "userPhotoUrl": null,
        "firstName": "Vanna",
        "lastName": "Vivanova",
        "country": "Russia",
        "isFollow": true
    }]
}

it(`follow user test`, () => {
    const newState = usersReducer(usersState, followSuccess(unfollowedUserId))
    expect(newState.users.find(u => u.id === unfollowedUserId).isFollow).toBeTruthy()
})

it(`unfollow user test`, () => {
    const newState = usersReducer(usersState, unfollowSuccess(followedUserId))
    expect(newState.users.find(u => u.id === followedUserId).isFollow).toBeFalsy()
})

it(`set users test`, () => {
    const newState = usersReducer({users: []}, setUsers(usersState.users));
    expect(newState.users.length).toBe(usersState.users.length)
})