import React from 'react';
import './index.css';
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
    </BrowserRouter>
)

window.getState = store.getState