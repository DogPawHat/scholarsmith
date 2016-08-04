import React from 'react';
import {TopicTitlePageProps} from './TemplateProps'

export default function(props: TopicTitlePageProps){
        return(
            <h2 className="page">{ props.title }</h2>
        );
    }
}