import * as React from 'react';
import {TopicTitlePageData} from '../types';

const TopicTitlePage: React.StatelessComponent<TopicTitlePageData> = (props: TopicTitlePageData) => {
    return (
        <h2 className='page topic_title'>{ props.title }</h2>
    );
};

export default TopicTitlePage;
