import * as React from 'react';
import {AnyPageData} from '../types';

const Page: React.StatelessComponent<{
    childPage?: React.StatelessComponent<AnyPageData>;
    pageData?: AnyPageData;
}> = (props) => {

    return (<section className='page_container'>
        { props.children }
    </section>);
};

export default Page;
