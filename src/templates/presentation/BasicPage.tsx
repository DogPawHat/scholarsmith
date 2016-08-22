import React from 'react';
import {BasicPageData} from '../types';
import Marked from 'marked';

const getDangrousHtmlObject = (content: string) => {
    return { __html: Marked(content) };
};

const BasicPage: React.StatelessComponent<BasicPageData> = (props: BasicPageData) => {

    const innerHtml = getDangrousHtmlObject(props.__content);
    return (
        <article className='page' dangerouslySetInnerHTML={innerHtml} ></article>
    );
};

export default BasicPage;
