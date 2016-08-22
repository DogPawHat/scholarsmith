import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import VisablePage from './VisablePage';
import ActivePageSelect from './ActivePageSelect';
import {ContextData, TutoralStateType, COURSE_DATA, CURRENT_PAGE, CURRENT_SCORE} from '../types';
import reducers from '../reducers';

const InnerBody = (props: ContextData) => {

    const initialCurrentState: TutoralStateType = {
        COURSE_DATA: props,
        CURRENT_PAGE: 0,
        CURRENT_SCORE: 0
    };

    const myStore = createStore(reducers, initialCurrentState, (window as any).devToolsExtension && (window as any).devToolsExtension());

    return (
        <div>
            <Provider store={ myStore }>
                <VisablePage />
            </Provider>
            <Provider store={ myStore }>
                <ActivePageSelect />
            </Provider>
        </div>
    );
};

export default InnerBody;
