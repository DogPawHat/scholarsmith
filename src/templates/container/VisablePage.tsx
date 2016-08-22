import React from 'react';
import {connect, IMapDispatchToProps, IMapStateToProps} from 'react-redux';
import {Dispatch} from 'redux';
import Immutable from 'immutable';

import WelcomePage from '../presentation/WelcomePage';
import TopicTitlePage from '../presentation/TopicTitlePage';
import BasicPage from '../presentation/BasicPage';
import QuestionPage from '../presentation/QuestionPage';
import ResultsPage from '../presentation/ResultsPage';
import TalkToUsPage from '../presentation/TalkToUsPage';
import Page from '../presentation/Page';

import {ContextData,
    AnyPageData,
    PageTypes,
    TutoralStateType,
    COURSE_DATA,
    CURRENT_PAGE,
    CURRENT_SCORE,
    TutoralStateHelpers
} from '../types';

const RenderedPageTypes = Immutable.Map<PageTypes, React.StatelessComponent<AnyPageData>>([
    ['welcome', WelcomePage],
    ['topic_title', TopicTitlePage],
    ['plain', BasicPage],
    ['question', QuestionPage],
    ['results', ResultsPage],
    ['talktous', TalkToUsPage]
]);

const getRenderedPage = (id: number, pages: AnyPageData[]) => {
    return RenderedPageTypes.get(pages[id].type)(pages[id]);
};

const mapStateToProps: (state: TutoralStateType) => { pageContent: React.ReactElement<AnyPageData> } = (state: TutoralStateType) => {
    return {
        pageContent: getRenderedPage(state.CURRENT_PAGE, TutoralStateHelpers(state).GET_PAGES().toArray() )
    };
};

const VisablePage = connect(mapStateToProps)(Page);


export default VisablePage;
