import './App.css';
import Header from "../Header/Header";
import NavBar from "../Navbar/NavBar";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs"
import {Route, Routes} from "react-router-dom";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<Profile profileState={props.state.profileState}
                                                             dispatch={props.dispatch}/>}/>
                    <Route path='/dialogs/*' element={<Dialogs dialogsState={props.state.dialogsState}
                                                               dispatch={props.dispatch}/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
