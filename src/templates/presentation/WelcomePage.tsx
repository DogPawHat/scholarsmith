import * as React from 'react';
import { PageData } from '../types';

const WelcomePage: React.StatelessComponent<PageData> = (props) => {
    return (
        <h1 className='page welcome'>WELCOME</h1>
    );
};

export default WelcomePage;
