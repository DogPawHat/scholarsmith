import React from 'react';
import Immutable from 'immutable';

const PageSelect: React.StatelessComponent<{
    goBack?: () => void, 
    goForward?: () => void,
    createGoToTopic?: (
        topics: Immutable.Map<number, number>,
        topic: number
    ) => void,
    topics?: Immutable.Map<number, number>
}> = (props) => {
    return (
        <ul id="pageselect">
            <li className="arrow" onClick={props.goBack}><a href="#">&laquo; </a></li>
            {props.topics.map((topic, i) => {
                return <li><a onClick={props.createGoToTopic(props.topics, i) }>{i + 1}</a></li>;
            }) }
            <li className="arrow" onClick={props.goForward}><a href="#">&raquo; </a></li>
        </ul>);
};

export default PageSelect;
