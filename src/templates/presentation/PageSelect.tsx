import * as React from 'react';
import * as Immutable from 'immutable';
import {PageSelectData} from '../types';

const PageSelect: React.StatelessComponent<PageSelectData> = (props) => {
    const completeGoForward = () => {
        props.goForward(props.pageLength);
    };

    return (
        <ul id='pageselect'>
            <li className='arrow' onClick={props.goBack}><a href='#'>&laquo; </a></li>
            {props.topics.map((topic, i) => {
                return <li key={i}><a onClick={props.createGoToTopic(props.topics, i) }>{i + 1}</a></li>;
            }).toArray() }
            <li className='arrow' onClick={completeGoForward}><a href='#'>&raquo; </a></li>
        </ul>);
};

export default PageSelect;
