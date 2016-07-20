import React from 'react';
import Marked from 'marked';
import {PageProps, TopicProps, TopicsProps} from './TemplateProps';
import AbstractPage from './AbstractPage.tsx';

class Page extends AbstractPage<PageProps> {
    render(){
        return (
            <article class="page" dangerouslySetInnerHTML={Marked(this.props.text) } />
	    );
    }
}

class Topic extends AbstractPage<TopicProps> {
    render(){
        return(
        <article className="topic">
            <h2 className="page">{ this.props.title }</h2>
            {this.props.pages.map((page, i) => {
                return new Page(page);
            }) }
        </article>
        );
    }
}

interface TopicsState {
    current: number;
}

export function Topics(props: TopicProps): React.ReactElement<TopicProps>{
        return (
            <div className="topics">
                <h1 className="page current">WELCOME</h1>
                {this.props.topics.map((topic) => {
                    return new Topic(topic);
                }) }
                {{{ tutorialtest }}}
                <div className="page talk_to_us">
                    <p>Please Talk to us</p>
                </div>
            </div>
        )
    }
}