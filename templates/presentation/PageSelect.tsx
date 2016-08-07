import React from 'react';
import { Dispatch } from 'redux';
import { connect, IMapDispatchToProps, IMapStateToProps} from 'react-redux';
import {createNextPageAction, createPrevPageAction, createSelectTopicAction} from '../actions'
import { TutoralStateType } from '../types';

const Paganation = function(props){
        return(
        <ul id="pageselect">
            <li className="arrow"><a href="#">&laquo; </a></li>
            {this.props.topics.map((topic, i) => {
                return <li><a onClick={props.setCurrent}>{props.accessKey+1}</a></li>;
            })}
            <li className="arrow"><a href="#">&raquo; </a></li>
        </ul>);
}

const mapStateToProps: IMapStateToProps = (state: TutoralStateType)

const mapDispatchToProps: IMapDispatchToProps = (dispatch: Dispatch<TutoralStateType>) => {
    return
};

const PageSelect = connect(mapStateToProps, mapDispatchToProps)(Paganation);