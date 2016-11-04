import * as React from 'react';
import {PageSelectData} from '../types';

const PageSelect: React.StatelessComponent<PageSelectData> = (props) => {
    const completeGoForward = () => {
        props.goForward(props.pageLength);
    };

    return (
        <ul id='pageselect'>
            <li className='arrow' id='a_back'><a onClick={props.goBack} href='#'>&laquo; </a></li>
            {props.topics.map((topic, i) => {
                return <li id={'topic_' + i} key={i}><a onClick={props.createGoToTopic(props.topics, i) }>{i + 1}</a></li>;
            }).toArray() }
            <li className='arrow' id='a_forward'><a onClick={completeGoForward} href='#'>&raquo; </a></li>
        </ul>);
};

export default PageSelect;
