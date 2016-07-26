import React from 'react';
import Marked from 'marked';

import {PageProps, TopicProps, TopicsProps} from './TemplateProps';
import AbstractPage from './AbstractPage';
import TutorialTest from './TutorialTest';
import WelcomePage from './WelcomePage';
import TalkToUsPage from './TalkToUsPage';
import Topic from './Topic';

export default function (props: TopicsProps): React.ReactElement<TopicsProps> {
    return (
        <div className="topics">
            <WelcomePage initialState={true}/>
            {props.topics.map((topic, i) => {
                return <Topic {...topic} key={i} />
            }) }
            <TutorialTest questions={props.questions}/>
            <TalkToUsPage />
        </div>
    )
}