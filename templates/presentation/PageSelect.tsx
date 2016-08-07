import React from 'react';
import Immutable from 'immutable';
import { Dispatch } from 'redux';
import { connect, IMapDispatchToProps, IMapStateToProps} from 'react-redux';
import {createNextPageAction, createPrevPageAction, createSetPageAction} from '../actions'
import { TutoralStateType } from '../types';

const Paganation = function(props: {
    topics: Immutable.Map<number, number>,
    goBack: () => void,
    goForward: () => void,
    goToTopic: (topics: Immutable.Map<number, number>, i: number) => void
}){
        return(
        <ul id="pageselect">
            <li className="arrow" onClick={props.goBack}><a href="#">&laquo; </a></li>
            {props.topics.map((topic, i) => {
                return <li><a onClick={props.goToTopic(props.topics, i)}>i</a></li>;
            })}
            <li className="arrow" onClick={props.goForward}><a href="#">&raquo; </a></li>
        </ul>);
}

const mapStateToProps: IMapStateToProps = (state: TutoralStateType){
    return{
        topics: state.GET_ALL_TOPIC_TITLES()
    }
}

const mapDispatchToProps: IMapDispatchToProps = (dispatch: Dispatch<TutoralStateType>) => {
    return {
        goBack(){
            dispatch(createPrevPageAction())
        },
        goForward(){
            dispatch(createNextPageAction())
        },
        goToTopic(topics: Immutable.Map<number, number>, topic: number){
            dispatch(createSetPageAction(topics.get(topic)))
        }
    }
};

const PageSelect = connect(mapStateToProps, mapDispatchToProps)(Paganation);

export default PageSelect;