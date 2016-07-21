import React from 'react';
import {BodyProps} from './TemplateProps.ts'
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

function Body(props: BodyProps) {
    return (
        <html lang="en">
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