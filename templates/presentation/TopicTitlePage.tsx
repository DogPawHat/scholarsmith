import React from 'react';
import {TopicTitlePageData} from '../types'

export default function(props: TopicTitlePageData){
        return(
            <h2 className="page">{ props.title }</h2>
        );
    }
}