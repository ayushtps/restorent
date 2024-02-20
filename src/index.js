import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Routers from './Routers';
import { Provider } from 'react-redux';
import { store } from './redux/store/Store';
import Context from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Context/> 
    </Provider>
);
reportWebVitals();
