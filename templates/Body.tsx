import React from 'react';
import {BodyProps} from './TemplateProps.ts'


function Body(props: BodyProps) {
    return (
        <html lang="en">
            <meta charset="utf-8"/>
            <title>{ props.title }</title>
            <link rel="stylesheet" href="styles.css" />
            <script src="bundle.js" />
            <body>
                <div id="content">
                    {props.children}
                </div>
            </body>
        </html>
    );
}