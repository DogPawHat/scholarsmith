import React from 'react';
import WelcomePage from './WelcomePage';

const Page: React.StatelessComponent<{pageContent: React.ReactNode}> = function(props = {
    pageContent: WelcomePage()
}) {
    return (<section className="page_container">{props.pageContent}</section>)
}

export default Page;