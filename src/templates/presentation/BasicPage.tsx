import * as React from 'react';
import {TopicPageData} from '../types';

export interface BasicPageData extends TopicPageData {
    content: string;
};

const BasicPage: React.StatelessComponent<BasicPageData> = (props: BasicPageData) => {
    return (
        <article className='page basic'
        dangerouslySetInnerHTML={{__html: props.content}} >
        </article>
    );
};

export default BasicPage;
