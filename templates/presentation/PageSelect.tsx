import React from 'react';
import Immutable from 'immutable';
import { Dispatch } from 'redux';
import { connect, IMapDispatchToProps, IMapStateToProps} from 'react-redux';
import {createNextPageAction, createPrevPageAction, createSetPageAction} from '../actions'
import { TutoralStateType, TutoralStateHelpers } from '../types';

const Paganation = function (props?) {
    return (
        <ul id="pageselect">
            <li className="arrow" onClick={props.goBack}><a href="#">&laquo; </a></li>
            {props.topics.map((topic, i) => {
                return <li><a onClick={props.createGoToTopic(props.topics, i) }>{i + 1}</a></li>;
            }) }
            <li className="arrow" onClick={props.goForward}><a href="#">&raquo; </a></li>
        </ul>);
}

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
                dispatch(createSetPageAction(topics.get(topic)))
            };
        }
    }
};

const PageSelect = connect(mapStateToProps, mapDispatchToProps)(Paganation);

export default PageSelect;