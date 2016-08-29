import React from 'react';
import WelcomePage from './WelcomePage';
import QuestionPage from './QuestionPage';
import {AnyPageData} from '../types';

const Page: React.StatelessComponent<{
    childPage?: React.StatelessComponent<AnyPageData>;
    pageData?: AnyPageData;
}> = (props) => {

    return (<section className='page_container'>
        <props.childPage {...props.pageData}/>
    </section>);
};

export default Page;
