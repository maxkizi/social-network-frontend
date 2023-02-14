import './App.css';
import NavBar from "../Navbar/NavBar";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";
import Profile from "../Profile/Profile";
import AuthContainer from "../Authentication/LoginContainer";
import HeaderContainer from "../Header/HeaderContainer";
import ProfileSettingsRestContainer from "../Profile/ProfieSettings/ProfileSettingsContainer";


const App = () => {
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
                    <Route path='users' element={<UsersContainer/>}/>
                    <Route path='login' element={<AuthContainer/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
