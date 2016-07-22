import React from "react";
import { TopicProps } from "./TemplateProps"
import Page from "./Page";
import TopicTitlePage from "./TopicTitlePage";
import AbstractPage from "./AbstractPage";

export default function(props: TopicProps){
    return(
        <article className="topic">
            <TopicTitlePage title={props.title} />
            {props.pages.map((page, i) => {
                <Page {...page} />
            }) }
        </article>
        );
}