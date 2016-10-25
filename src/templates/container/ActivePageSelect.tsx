import * as React from 'react';
import * as Immutable from 'immutable';
import { Dispatch, Store } from 'redux';
import { connect } from 'react-redux';
import {createNextPageAction, createPrevPageAction, createSetPageAction} from '../actions';
import { TutoralStateType, TutoralStateHelpers, PageSelectData } from '../types';
import PageSelect from '../presentation/PageSelect';

const mapStateToProps = (state: TutoralStateType) => {
    return {
        topics: TutoralStateHelpers(state).GET_ALL_TOPIC_TITLES(),
        pageLength: TutoralStateHelpers(state).GET_PAGE_LENGTH()
    };
};

const mapDispatchToProps = (dispatch: Dispatch<TutoralStateType>) => {
    return {
        goBack() {
            dispatch(createPrevPageAction());
        },
        goForward(page_length: number) {
            dispatch(createNextPageAction(page_length));
        },
        createGoToTopic(topics: Immutable.Map<number, number>, topic: number) {
            return () => {
                dispatch(createSetPageAction(topics.get(topic) + 1));
            };
        }
    };
};

const ActivePageSelect = connect(mapStateToProps, mapDispatchToProps)(PageSelect);

export default ActivePageSelect;
