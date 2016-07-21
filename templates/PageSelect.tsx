import React from 'react';
import {PageSelectProps} from './TemplateProps';

interface PageSelectState{
    currentPage: number;
}

interface PageLinkProps{
    key: React.Key;
    changePage: () => void;
}

interface PageLinkState{
    current: boolean;
}

function PageLink(props: PageLinkProps): React.ReactElement<PageLinkProps>{
    const setCurrent = () => {
        this.props.changePage(props.key);
    }
    return <li><a onClick={setCurrent} key={props.key}>{props.key}</a></li>;
}


export default class extends React.Component<PageSelectProps, PageSelectState> {
    constructor(props: PageSelectProps){
        super(props);
        this.state = {
            currentPage: 0
        };
    }

    changeCurrentPage(i: number){
        this.state.currentPage = i;
    }

    render (){
        return(
        <ul id="pageselect">
            <li className="arrow"><a href="#">&laquo; </a></li>
            {this.props.topics.map((topic, i) => {
                <PageLink key={i} changePage={this.changeCurrentPage.bind(this)}/>
            })}
            <li className="arrow"><a href="#">&raquo; </a></li>
        </ul>);
    }
}