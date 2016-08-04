import React from 'react';
import {connect} from 'react-redux';
import Immutable from 'immutable';

import WelcomePage from '../presentation/WelcomePage';
import TopicTitlePage from '../presentation/TopicTitlePage';
import BasicPage from '../presentation/BasicPage';
import QuestionPage from '../presentation/QuestionPage';
import ResultsPage from '../presentation/ResultsPage';
import TalkToUsPage from '../presentation/TalkToUsPage';
import Page from '../presentation/Page';
import {ContextData} from '../types';

const createPageList = (context: ContextData) => {
    return Immutable.List().withMutations((list) => {
        list.push(<WelcomePage />);
        list.push(
            context.pages.map((page) => {
                switch (page.type){
                    case 'plain':
                        return BasicPage(page);
                    case 'topic_title':
                        return TopicTitlePage(page);
                    case 'question':
                        return QuestionPage(page);
                    default:
                        return BasicPage(page);
                };
            })
        )
        list.push(<ResultsPage />);
        list.push(<TalkToUsPage />);
    });
}

const getTopicPageHeader = (index) => {
    
}
