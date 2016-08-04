import React from 'react';
import {ContextData} from '../TemplateProps'
import Topics from '../Topics'
import PageSelect from '../PageSelect'

function Head(props: { title: string }) {
    return (
        <head>
            <meta charSet="utf-8"/>
            <title>{ props.title }</title>
            <link rel="stylesheet" href="styles.css" />
        </head>
    );
}

export default function (props: ContextData) {
    return (
        <html lang="en" id="root">
            <Head title={props.title} />
            <body>
                <div id="root"></div>
                <script src="client.bundle.js" />
            </body>
        </html>
    );
}