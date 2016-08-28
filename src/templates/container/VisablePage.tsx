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

import {
    PageData,
    PageTypes,
    TutoralStateType,
    TutoralStateHelpers
} from '../types';

import {createAnswerQuestionAction} from '../actions';

const RenderedPageTypes = {
    'welcome': WelcomePage,
    'topic_type': TopicTitlePage,
    'plain': BasicPage,
    'question': QuestionPage,
    'results': ResultsPage,
    'talktous': TalkToUsPage
};

const getRenderedPage = (id: number, pages: PageData[]) => {
    return RenderedPageTypes[pages[id].type];
};

const mapStateToProps: (state: TutoralStateType) => { pageContent: React.ReactElement<PageData> } = (state: TutoralStateType) => {
    return {
        pageContent: getRenderedPage(state.CURRENT_PAGE, TutoralStateHelpers(state).GET_PAGES().toArray())
    };
};

const mapDispatchToProps = (dispatch: Dispatch<TutoralStateType>) => {
    return {
        submitQuestion(question_key: number, answer: string, correct: boolean) {
            dispatch(createAnswerQuestionAction(question_key, answer, correct));
        }
    };
};

const mergeProps = (mapStateToProps, mapDispatchToProps, ownProps: any) => {
    
}

const VisablePage = connect(mapStateToProps, mapDispatchToProps)(Page);


export default VisablePage;
