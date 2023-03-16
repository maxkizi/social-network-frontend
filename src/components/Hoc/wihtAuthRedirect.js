import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if (!props.isAuth) {
            return <Navigate to={'/login'}/>
        }
        return <Component {...props}/>
    }

    return connect(mapStateToProps)(RedirectComponent)
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authState.isAuth
    }
}


