import {configureStore} from '@reduxjs/toolkit'
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";

const reducers = {
    profileState: profileReducer,
    dialogsState: dialogReducer,
    sidebarState: sidebarReducer,
    usersState: usersReducer,
    authState: authReducer
}

let store = configureStore({
    reducer: reducers,
    middleware: [thunk]
})

export default store