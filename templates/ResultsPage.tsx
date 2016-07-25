import React from 'react';
import AbstractPage from './AbstractPage'
import {ResultsPageProps} from './TemplateProps'

export default class extends AbstractPage<{}>{
    render(){
        return(
            <div className="results page">
                <h1>Results</h1>
                <p>SCORE SHOULD GO HERE</p>
            </div>
        );
    }
}