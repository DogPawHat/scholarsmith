import React from 'react';
import {PageSelectProps} from './TemplateProps';

function PageSelect(props: PageSelectProps) {
    return (
        <ul id="pageselect">
            <li className="arrow"><a href="#">&laquo; </a></li>
            {props.topics.map((topic, i) => {
                <li><a href="#">{i}</a></li>
            })}
            <li className="arrow"><a href="#">&raquo; </a></li>
        </ul>
    )
}