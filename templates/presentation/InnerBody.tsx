import React from 'react';
import { createStore } from 'redux';
import ReactRedux from 'react-redux';
import Immutable from 'immutable';
import VisablePage from '../container/VisablePage';
import {ContextData, TutoralStateType,COURSE_DATA,CURRENT_PAGE,CURRENT_SCORE} from '../types';
import reducers from '../reducers';

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

export default function (props: ContextData) {
    

    const initialCurrentState: TutoralStateType = Immutable.Map<string, any>([
        [COURSE_DATA, props]
        [CURRENT_PAGE, 0],
        [CURRENT_SCORE, 0]
    ]);

    const store = createStore(reducers, initialCurrentState);
    
    return (
        <Provider store={createStore(reducers) }>
            <VisablePage />
        </Provider>
    )
}