import React from 'react';
import Marked from 'marked';
import {PageProps, TopicProps, TopicsProps} from './TemplateProps';

function Page(props: PageProps): React.ReactElement<PageProps> {
    return (
        <article class="page" dangerouslySetInnerHTML={Marked(props.text) } />
    );
}

function Topic(props: TopicProps): React.ReactElement<TopicProps> {
    let pageElements = props.pages.map((page, i) => {
        return Page(page);
    })
    return (
        <article className="topic">
            <h2 className="page">{ props.title }</h2>
            {pageElements}
        </article>
    )
}

interface TopicsState{
    current: number;
}

export default class Topics extends React.Component<TopicProps, TopicsState>{
    render(){
        return (
            <div className="topics">
                <h1 className="page current">WELCOME</h1>
                {this.props.topics.map((topic) => {
                    return Topic(topic);
                }) }
                {{{ tutorialtest }}}
                <div className="page talk_to_us">
                    <p>Please Talk to us</p>
                </div>
            </div>
        )
    }
}