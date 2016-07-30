import React from "react";
import {IndexRoute, Route}  from "react-router";
import { TopicProps } from "./TemplateProps"
import Page from "./Page";
import TopicTitlePage from "./TopicTitlePage";
import AbstractPage from "./AbstractPage";

export default function(props: TopicProps){
    return(
        <article className="topic">
            <IndexRoute component={TopicTitlePage} title={props.title} />
            {props.pages.map((page, i) => {
            return <Route {...page} path="pages/{i}" component={Page} key={i}/>
            }) }
        </article>
        );
}