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
    AnyPageData,
    QuestionPageData,
    PageData,
    PageTypes,
    TutoralStateType,
    TutoralStateHelpers
} from '../types';

import {createAnswerQuestionAction} from '../actions';

const RenderedPageTypes = {
    'welcome': WelcomePage,
    'topic_title': TopicTitlePage,
    'plain': BasicPage,
    'question': QuestionPage,
    'results': ResultsPage,
    'talktous': TalkToUsPage
};

const getRenderedPage = (id: number, pages: PageData[]) => {
    return RenderedPageTypes[pages[id].type];
};

const mapStateToProps = (state: TutoralStateType) => {
    return {
        childPage: getRenderedPage(state.CURRENT_PAGE, TutoralStateHelpers(state).GET_PAGES().toArray()),
        pageData: TutoralStateHelpers(state).GET_PAGES().get(state.CURRENT_PAGE)
    };
};

const mapDispatchToProps = (dispatch: Dispatch<TutoralStateType>) => {
    return {
        submitQuestion(question_key: number, answer: string, correct: boolean) {
            dispatch(createAnswerQuestionAction(question_key, answer, correct));
        }
    };
};

const mergeProps = (mapStateToPropsResult: { pageData: AnyPageData, childPage: React.StatelessComponent<any> }, mapDispatchToPropsResult: { submitQuestion: (answer: boolean) => void }, ownProps: Object) => {

    return {
        childPage: mapStateToPropsResult.childPage,
        pageData: mapStateToPropsResult.pageData.type === 'question'
            ? Object.assign({}, mapStateToPropsResult.pageData, { submitQuestion: mapDispatchToPropsResult.submitQuestion })
            : mapStateToPropsResult.pageData
    };
};

const VisablePage = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Page);


export default VisablePage;
