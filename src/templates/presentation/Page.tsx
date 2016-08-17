import React from 'react';
import WelcomePage from './WelcomePage';

const Page: React.StatelessComponent<{
    pageContent?: React.ReactElement<any>;
}> = (props) => {
    return (<section className='page_container'>{props.pageContent}</section>);
};

export default Page;
