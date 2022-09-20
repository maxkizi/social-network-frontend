import React from 'react';
import './index.css';
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'))

let rerenderEntireTree = () => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App store={store}/>
            </React.StrictMode>
        </BrowserRouter>
    );
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)