import {connect} from "react-redux";
import Header from "./Header";

const mapStateToProps = (state) => {
    return {
        isAuth: state.authState.isAuth,
        currentUsername: state.authState.login
    }
}

export default connect(mapStateToProps, {})(Header)