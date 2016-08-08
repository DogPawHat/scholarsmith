import React from 'react';
import WelcomePage from './WelcomePage';

const Page = function (props?) {
    return (<section className="page_container">{props.pageContent}</section>)
}

export default Page;