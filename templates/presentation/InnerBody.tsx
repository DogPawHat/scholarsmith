import React from 'react';
import Page from '.Page';

export default function (props: BodyProps) {
    return (
        <div>
            <Topics {...props.topics} />
            <PageSelect topics={props.topics.topics} />
        </div>)
}