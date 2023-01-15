import {configureStore} from '@reduxjs/toolkit'
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reduser";

const reducers = {
    profileState: profileReducer,
    dialogsState: dialogReducer,
    sidebarState: sidebarReducer,
    usersState: usersReducer
}

let store = configureStore({
    reducer: reducers
})

export default store