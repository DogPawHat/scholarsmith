import React from 'react';
import Immutable from 'immutable';
import { Dispatch } from 'redux';
import { connect, IMapDispatchToProps, IMapStateToProps} from 'react-redux';
import {createNextPageAction, createPrevPageAction, createSetPageAction} from '../actions'
import { TutoralStateType, TutoralStateHelpers } from '../types';
import PageSelect from '../presentation/PageSelect';

const mapStateToProps: IMapStateToProps = (state: TutoralStateType) => {
    return {
        topics: TutoralStateHelpers(state).GET_ALL_TOPIC_TITLES()
    }
}

const mapDispatchToProps: IMapDispatchToProps = (dispatch: Dispatch<TutoralStateType>) => {
    return {
        goBack() {
            dispatch(createPrevPageAction())
        },
        goForward() {
            dispatch(createNextPageAction())
        },
        createGoToTopic(topics: Immutable.Map<number, number>, topic: number) {
            return () => {
                dispatch(createSetPageAction(topics.get(topic) + 1))
            };
        }
    }
};

const ActivePageSelect = connect(mapStateToProps, mapDispatchToProps)(PageSelect);

export default ActivePageSelect;
