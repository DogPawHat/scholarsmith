import React from 'react';
import {ResultsData} from '../types';

const ResultsPage: React.StatelessComponent<ResultsData> = (props: ResultsData) => {
    return (
        <div className='page results'>
            <h1>Results</h1>
            <p>{ props.score() }</p>
        </div>
    );
};

export default ResultsPage;
