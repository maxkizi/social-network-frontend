import './App.css';
import Header from "../Header/Header";
import NavBar from "../Navbar/NavBar";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";
import ProfileInfoContainer from "../Profile/ProfileInfo/ProfileInfoContainer";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<ProfileInfoContainer />}/>
                    <Route path='/dialogs/*' element={<DialogsContainer />}/>
                    <Route path='/users' element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
