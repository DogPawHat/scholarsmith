import * as React from 'react';
import * as Immutable from 'immutable';

const PageSelect = (props: {
    goBack?(): void,
    goForward?(page_length: number): void,
    createGoToTopic?(
        topics: Immutable.Map<number, number>,
        topic: number
    ): () => void,
    pageLength?: number,
    topics?: Immutable.Map<number, number>
}) => {
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
