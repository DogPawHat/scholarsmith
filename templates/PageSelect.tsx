import React from 'react';
import {PageSelectProps} from './TemplateProps';

interface PageSelectState{
    currentPage: number;
}

class PageSelect extends React.Component<PageSelectProps, PageSelectState> {
    constructor(){
        super();
        this.state = {
            currentPage: 0
        };
    }

    changeCurrentPage(i: number){
        this.state.currentPage = i;
    }

    render (){
        <ul id="pageselect">
            <li className="arrow"><a href="#">&laquo; </a></li>
            {this.props.topics.map((topic, i) => {
                <li><a onClick={this.changeCurrentPage} key={i}>{i}</a></li>
            })}
            <li className="arrow"><a href="#">&raquo; </a></li>
        </ul>
    }
}