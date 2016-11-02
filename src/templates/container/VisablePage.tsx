import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import WelcomePage from '../presentation/WelcomePage';
import TopicTitlePage from '../presentation/TopicTitlePage';
import BasicPage from '../presentation/BasicPage';
import ActiveQuestionPage from './ActiveQuestionPage';
import ActiveResultsPage from './ActiveResultsPage';
import TalkToUsPage from '../presentation/TalkToUsPage';
import Page from '../presentation/Page';

import {
    AnyPageData,
    TutoralStateType,
    TutoralStateHelpers
} from '../types';

const RenderedPageTypes = {
    'welcome': WelcomePage,
    'topic_title': TopicTitlePage,
    'plain': BasicPage,
    'question': ActiveQuestionPage,
    'results': ActiveResultsPage,
    'talktous': TalkToUsPage
};

const getRenderedPage: (id: number, pages: AnyPageData[]) => React.StatelessComponent<AnyPageData> = (id, pages) => {
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
