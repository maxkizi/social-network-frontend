import './App.css';
import NavBar from "../Navbar/NavBar";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";
import Profile from "../Profile/Profile";
import AuthContainer from "../Authentication/LoginContainer";
import HeaderContainer from "../Header/HeaderContainer";
import ProfileSettingsRestContainer from "../Profile/ProfieSettings/ProfileSettingsContainer";
import Music from "../Music/Music";
import News from "../News/News";
import Settings from "../Settings/Settings";
import React from "react";
import {connect} from "react-redux";
import {initializeApp} from "../../redux/app-reducer";
import Preloader from "../Common/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.isInitFinished) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='profile/:userId' element={<Profile key='userId'/>}/>
                        <Route path='myprofile' element={<Profile key='myProfile'/>}/>
                        <Route path='myprofile/settings' element={<ProfileSettingsRestContainer/>}/>
                        <Route path='dialogs/*' element={<DialogsContainer/>}/>
                        <Route path='news' element={<News/>}/>
                        <Route path='users' element={<UsersContainer/>}/>
                        <Route path='music' element={<Music/>}/>
                        <Route path='settings' element={<Settings/>}/>
                        <Route path='login' element={<AuthContainer/>}/>
                    </Routes>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    initializeApp
}

const mapStateToProps = (state) => {
    return {
        isInitFinished: state.appState.isInitFinished
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
