import {configureStore} from '@reduxjs/toolkit'
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import authReducer from "./auth-reducer";

const reducers = {
    profileState: profileReducer,
    dialogsState: dialogReducer,
    sidebarState: sidebarReducer,
    usersState: usersReducer,
    authState: authReducer
}

let store = configureStore({
    reducer: reducers
})


export const withRouter = (Component) => {
    return (props) => {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();
        return <Component {...props}
                          router={{location, navigate, params}}/>
    }
}
export default store