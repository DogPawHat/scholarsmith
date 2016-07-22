import React from 'react';
import AbstractPage from './AbstractPage';
import {TopicTitlePageProps} from './TemplateProps'

export default class extends AbstractPage<TopicTitlePageProps>{
    render(){
        return(
            <h2 className="page">{ this.props.title }</h2>
        );
    }
}