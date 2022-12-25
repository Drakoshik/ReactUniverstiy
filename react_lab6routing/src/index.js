import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import "./assets/bootstrap.min.css"
import {setupStore} from "./store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = setupStore()

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

