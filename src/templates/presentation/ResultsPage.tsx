import React from 'react';
import {ResultsData} from '../types';

const ResultsPage: React.StatelessComponent<ResultsData> = function(props: ResultsData) {
    return (
        <div className='results page'>
            <h1>Results</h1>
            <p>{ props.score }</p>
        </div>
    );
};

export default ResultsPage;
