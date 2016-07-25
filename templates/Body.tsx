import React from 'react';
import {BodyProps} from './TemplateProps'
import Topics from './Topics'
import PageSelect from './PageSelect'

function Head(props: { title: string }) {
    return (
        <head>
            <meta charset="utf-8"/>
            <title>{ props.title }</title>
            <link rel="stylesheet" href="styles.css" />
            <script src="bundle.js" />
        </head>
    );
}

export default function (props: BodyProps) {
    return (
        <html lang="en" id="root">
            <Head title={props.title} />
            <body>
                <div id="content">
                    <Topics {...props.topics} />
                    <PageSelect topics={props.topics.topics} />
                </div>
            </body>
        </html>
    );
}