import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import * as Immutable from 'immutable';

import WelcomePage from '../presentation/WelcomePage';
import TopicTitlePage from '../presentation/TopicTitlePage';
import BasicPage from '../presentation/BasicPage';
import QuestionPage from '../presentation/QuestionPage';
import ActiveQuestionPage from './ActiveQuestionPage';
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
    'question': ActiveQuestionPage,
    'results': ResultsPage,
    'talktous': TalkToUsPage
};

const getRenderedPage: (id: number, pages: AnyPageData[]) => React.StatelessComponent<AnyPageData> = (id, pages) => {
    return RenderedPageTypes[pages[id].type];
};

const mapStateToProps = (state: TutoralStateType) => {
    return {
        childPage: getRenderedPage(state.CURRENT_PAGE, TutoralStateHelpers(state).GET_PAGES().toArray()),
        pageData: TutoralStateHelpers(state).GET_PAGES().get(state.CURRENT_PAGE),
        score: () => { return TutoralStateHelpers(state).GET_PROPER_SCORE(); }
    };
};

const mapDispatchToProps = (dispatch: Dispatch<TutoralStateType>) => {
    return {
        submitQuestion: (question_key: number, answer: string, correct: boolean) => {
            dispatch(createAnswerQuestionAction(question_key, answer, correct));
        }
    };
};

const mergeProps = (mapStateToPropsResult, mapDispatchToPropsResult, ownProps) => {

    return {
        childPage: mapStateToPropsResult.childPage,
        pageData: Object.assign(
            {},
            mapStateToPropsResult.pageData,
            {
                submitQuestion: mapDispatchToPropsResult.submitQuestion,
                score: mapStateToPropsResult.score
            }
        )
    };
};

const VisablePage = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Page);


export default VisablePage;
