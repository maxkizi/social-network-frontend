import {configureStore} from '@reduxjs/toolkit'
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";

const reducers = {
    profileState: profileReducer,
    dialogsState: dialogReducer,
    sidebarState: sidebarReducer,
    usersState: usersReducer,
    authState: authReducer,
    appState: appReducer,
    form: formReducer
}

let store = configureStore({
    reducer: reducers,
    middleware: [thunk]
})

export default store