import React from 'react';
import {BodyProps} from './TemplateProps'
import Topics from './Topics'
import PageSelect from './PageSelect'

export default function (props: BodyProps) {
    return (<div id="root">
        <Topics {...props.topics} />
        <PageSelect topics={props.topics.topics} />
    </div>)
}