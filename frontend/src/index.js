import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'

import configStore from './store/StoreConfig'
import App from './main/App';

const store = configStore()

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </Router>
    </Provider>,
    document.getElementById('root')
);
