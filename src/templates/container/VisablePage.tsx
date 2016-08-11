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
    PageData,
    PageTypes,
    TutoralStateType,
    COURSE_DATA,
    CURRENT_PAGE,
    CURRENT_SCORE
} from '../types';

const RenderedPageTypes = Immutable.Map<PageTypes, React.StatelessComponent<PageData>>([
    ['welcome', WelcomePage],
    ['topic_title', TopicTitlePage],
    ['plain', BasicPage],
    ['question', QuestionPage],
    ['results', ResultsPage],
    ['talktous', TalkToUsPage]
]);

const getPages = (id: number, original_pages: PageData[]) => {
    const pages = Immutable.List<PageData>().withMutations(
        (list) => {
            list.push({ type: 'welcome' });
            list.push(...original_pages);
            list.push({ type: 'results' });
            list.push({ type: 'talktous' })
        }
    );
    return RenderedPageTypes.get(pages.get(id).type)(pages.get(id));
}

const mapStateToProps: (state: TutoralStateType) => { pageContent: React.ReactElement<PageData> } = (state: TutoralStateType) => {
    return {
        pageContent: getPages(state.CURRENT_PAGE, state.COURSE_DATA.pages)
    }
}

const VisablePage = connect(mapStateToProps)(Page);


export default VisablePage;