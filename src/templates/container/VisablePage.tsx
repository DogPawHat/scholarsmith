import React from 'react';
import {connect, IMapDispatchToProps, IMapStateToProps} from 'react-redux';
import {Dispatch} from 'redux';
import Immutable from 'immutable';

import WelcomePage from '../presentation/WelcomePage';
import TopicTitlePage from '../presentation/TopicTitlePage';
import BasicPage from '../presentation/BasicPage';
import ActiveQuestionPage from './ActiveQuestionPage';
import ResultsPage from '../presentation/ResultsPage';
import TalkToUsPage from '../presentation/TalkToUsPage';
import Page from '../presentation/Page';

import {AnyPageData,
    PageTypes,
    TutoralStateType,
    TutoralStateHelpers
} from '../types';

const RenderedPageTypes = Immutable.Map<PageTypes, any>([
    ['welcome', WelcomePage],
    ['topic_title', TopicTitlePage],
    ['plain', BasicPage],
    ['question', ActiveQuestionPage],
    ['results', ResultsPage],
    ['talktous', TalkToUsPage]
]);

const getRenderedPage = (id: number, pages: AnyPageData[]) => {
    const page = RenderedPageTypes.get(pages[id].type);
    return new page();
};

const mapStateToProps: (state: TutoralStateType) => { pageContent: React.ReactElement<AnyPageData> } = (state: TutoralStateType) => {
    return {
        pageContent: getRenderedPage(state.CURRENT_PAGE, TutoralStateHelpers(state).GET_PAGES().toArray())
    };
};

const VisablePage = connect(mapStateToProps)(Page);


export default VisablePage;
