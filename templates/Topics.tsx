import React from 'react';
import Marked from 'marked';
import {PageProps, TopicProps, TopicsProps} from './TemplateProps';
import AbstractPage from './AbstractPage.tsx';
import TutorialTest from './TutorialTest.tsx';

class Page extends AbstractPage<PageProps> {
    render(){
        return (
            <article className="page" dangerouslySetInnerHTML={Marked(this.props.text) } />
	    );
    }
}

class TopicTitlePage extends AbstractPage<{title: string}>{
    constructor(props: {title: string}){
        super(props);
    }
    
    render(){
        return(
            <h2 className="page">{ this.props.title }</h2>
        );
    }
    
}

function Topic(props: TopicProps){
    return(
        <article className="topic">
            <TopicTitlePage title={props.title} />
            {this.props.pages.map((page, i) => {
                return new Page(page);
            }) }
        </article>
        );
}

interface TopicsState {
    current: number;
}

class WelcomePage extends AbstractPage<{}>{
    constructor(props: {}){
        super(props)
        this.state.current = true;
    }

    render(){
        return(
            <h1 className="page current">WELCOME</h1>
        );
    }
}

class TalkToUsPage extends AbstractPage<{}>{
    render(){
        return(
            <div className="page talk_to_us"><p>Please Talk to us</p></div>
        );
    }
}

export default function(props: TopicsProps): React.ReactElement<TopicsProps>{
        return (
            <div className="topics">
                <WelcomePage />
                {this.props.topics.map((topic) => {
                    return Topic(topic);
                }) }
                <TutorialTest questions={props.questions}/>
                <TalkToUsPage />
            </div>
        )
    }
}