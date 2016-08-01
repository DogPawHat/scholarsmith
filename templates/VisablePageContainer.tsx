import React from 'react';
import {connect} from 'react-redux';
import Immutable from 'immutable';

import WelcomePage from './WelcomePage';
import TopicTitlePage from './TopicTitlePage';
import BasicPage from './BasicPage';
import QuestionPage from './QuestionPage';
import ResultsPage from './ResultsPage';
import TalkToUsPage from './TalkToUsPage';
import PageContainer from './PageContainer';
import {BodyProps, TopicProps, TopicsProps} from './TemplateProps';

const createPageList = (props: BodyProps) => {
    return Immutable.List().withMutations((list) => {
        list.push(<WelcomePage />);
        props.topics.topics.map((topic) => {
            list.push(<TopicTitlePage title={topic.title}/>);
            topic.pages.map((page) => {
                list.push(<BasicPage {...page}/>);
            });
        });
        props.topics.questions.map((question) => {
            list.push(<QuestionPage {...question} />);
        });
        list.push(<ResultsPage />);
        list.push(<TalkToUsPage />);
    });
}

const getTopicPageHeader = (index) => {
    
}
