import './views/styles/styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

// import { initAuth } from './auth';
import history from './history';
import configureStore from './store';
import App from './views/app';
// import registerServiceWorker from './register-service-worker';


const store = configureStore();
const rootElement = document.getElementById('root');



ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <App />
            </div>
        </ConnectedRouter>
    </Provider>,
    rootElement
);




