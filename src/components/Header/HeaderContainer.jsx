import {connect} from "react-redux";
import Header from "./Header";
import {me} from "../../redux/auth-reducer";

const mapStateToProps = (state) => {
    return {
        isAuth: state.authState.isAuth,
        currentUsername: state.authState.login
    }
}

const mapDispatchToProps = {
    me
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)