import React from 'react';
import { PageData } from '../types';

const WelcomePage: React.StatelessComponent<PageData> = function (props: PageData) {
    return (
        <h1 className='page current'>WELCOME</h1>
    );
};

export default WelcomePage;
