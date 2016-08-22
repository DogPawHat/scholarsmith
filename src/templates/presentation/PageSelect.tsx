import React from 'react';
import Immutable from 'immutable';

const PageSelect = (props: {
    goBack?: () => void,
    goForward?: () => void,
    createGoToTopic?: (
        topics: Immutable.Map<number, number>,
        topic: number
    ) => void,
    topics?: Immutable.Map<number, number>
}) => {
    return (
        <ul id='pageselect'>
            <li className='arrow' onClick={props.goBack}><a href='#'>&laquo; </a></li>
            {props.topics.map((topic, i) => {
                return <li key={i}><a onClick={props.createGoToTopic(props.topics, i) }>{i + 1}</a></li>;
            }).toArray() }
            <li className='arrow' onClick={props.goForward}><a href='#'>&raquo; </a></li>
        </ul>);
};

export default PageSelect;
