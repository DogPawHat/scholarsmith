import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import VisablePage from '../container/VisablePage';
import PageSelect from './PageSelect';
import WelcomePage from './WelcomePage';
import {ContextData, TutoralStateType,COURSE_DATA,CURRENT_PAGE,CURRENT_SCORE} from '../types';
import reducers from '../reducers';

export default function (props: ContextData) {

    const initialCurrentState = new TutoralStateType({
        COURSE_DATA: props,
        CURRENT_PAGE: 0,
        CURRENT_SCORE: 0
    });

    const store = createStore(reducers, initialCurrentState);


    return (
        <Provider store={ createStore(reducers) }>
            <VisablePage pageContent={WelcomePage({type: 'welcome'})}/>
            <PageSelect />
        </Provider>
    )
}