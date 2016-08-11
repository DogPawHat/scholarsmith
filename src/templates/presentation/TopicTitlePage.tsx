import React from 'react';
import {TopicTitlePageData} from '../types'

const TopicTitlePage: React.StatelessComponent<TopicTitlePageData> = function (props: TopicTitlePageData) {
    return (
        <h2 className="page">{ props.title }</h2>
    );
}

export default TopicTitlePage;