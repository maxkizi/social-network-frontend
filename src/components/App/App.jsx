import './App.css';
import Header from "../Header/Header";
import NavBar from "../Navbar/NavBar";
import Profile from "../Profile/Profile";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                    <Route path='/users/*' element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
