import React from 'react';
import {Router, Route} from 'react-router'
import {BodyProps} from './TemplateProps'
import Topics from './Topics'
import PageSelect from './PageSelect'

function Head(props: { title: string }) {
    return (
        <head>
            <meta charSet="utf-8"/>
            <title>{ props.title }</title>
            <link rel="stylesheet" href="styles.css" />
        </head>
    );
}

export default function (props: BodyProps) {
    return (
        <html lang="en">
            <Head title={props.title} />
            <body>
                <div id="root">
                    <Router>
                        <Route {...props.topics} path="/" component={Topics}/>
                        <PageSelect topics={props.topics.topics} />
                    </Router>
                </div>
                <script src="client.bundle.js" />
            </body>
        </html>
    );
}