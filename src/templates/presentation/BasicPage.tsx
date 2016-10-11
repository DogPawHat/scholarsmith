import * as React from 'react';
import {BasicPageData} from '../types';
import * as Marked from 'marked';

const getDangrousHtmlObject = (content: string) => {
    return { __html: Marked(content) };
};

const BasicPage: React.StatelessComponent<BasicPageData> = (props: BasicPageData) => {

    const innerHtml = getDangrousHtmlObject(props.__content);
    return (
        <article className='page basic' dangerouslySetInnerHTML={innerHtml} ></article>
    );
};

export default BasicPage;
