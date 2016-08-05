import React from 'react';
import {createNextPageAction, createPrevPageAction, createSelectTopicAction} from '../actions'

interface PageSelectState{
    currentPage: number;
}

interface PageLinkProps{
    changePage: (number) => void;
    accessKey: number;
}

interface PageLinkState{
    current: boolean;
}

function PageLink(props: PageLinkProps): React.ReactElement<PageLinkProps>{
    const setCurrent = () => {
        props.changePage(props.accessKey);
    }
    return <li><a onClick={setCurrent}>{props.accessKey+1}</a></li>;
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

    render(){
        return(
        <ul id="pageselect">
            <li className="arrow"><a href="#">&laquo; </a></li>
            {this.props.topics.map((topic, i) => {
                return <PageLink key={i} accessKey={i} changePage={this.changeCurrentPage.bind(this)}/>
            })}
            <li className="arrow"><a href="#">&raquo; </a></li>
        </ul>);
    }
}