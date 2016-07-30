import React from 'react';
import Marked from 'marked';
import {Route, IndexRoute} from 'react-router';

import {PageProps, TopicProps, TopicsProps} from './TemplateProps';
import AbstractPage from './AbstractPage';
import TutorialTest from './TutorialTest';
import WelcomePage from './WelcomePage';
import TalkToUsPage from './TalkToUsPage';
import Topic from './Topic';

export default function (props: TopicsProps): React.ReactElement<TopicsProps> {
    return (
        <div className="topics">
            <IndexRoute component={WelcomePage} />
            {props.topics.map((topic, i) => {
                return <Route {...topic} component={Topic} path="topics/{i}" key={i} />
            }) }
            <Route component={TutorialTest} questions={props.questions} path="test/"/>
            <Route component={TalkToUsPage} path="talktous" />
        </div>
    )
}