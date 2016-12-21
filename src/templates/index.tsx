import * as React from 'react';
import { createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';


import {ContextData, TutoralStateType} from './types';
import reducers from './reducers';
import routes from './routes';

const index = (props: ContextData) => {

    const myStore = createStore(reducers, applyMiddleware(thunkMiddleware)(window as any).devToolsExtension && (window as any).devToolsExtension());
    const history = syncHistoryWithStore(browserHistory, store);
    return (
        <div>
            <Provider store={ myStore }>
                <Router routes={ routes } history ={ browserHistory }/>
            </Provider>
        </div>
    );
};

export default index;
