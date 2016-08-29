import React from 'react';
import Immutable from 'immutable';

export type PageTypes = 'plain' |
    'topic_title' |
    'question' |
    'welcome' |
    'results' |
    'talktous';


export type COURSE_DATA = 'COURSE_DATA';
export type CURRENT_PAGE = 'CURRENT_PAGE';
export type CURRENT_SCORE = 'CURRENT_SCORE';

export interface TutoralStateType {
    COURSE_DATA: ContextData;
    CURRENT_PAGE: number;
    CURRENT_SCORE: number;
}

export interface ContextData {
    title: string;
    pages: AnyPageData[];
};

export interface PageData {
    type: PageTypes;
};

export interface TopicPageData extends PageData {
    topic_id: number;
};

export interface TopicTitlePageData extends TopicPageData {
    title: string;
};

export interface BasicPageData extends TopicPageData {
    __content: string;
};

export interface QuestionPageData extends PageData {
    stem: string;
    answers: Array<string>;
    correct: number;
    feedback: string;
    index: number;
    submitQuestion?: (question_key: number, answer: string, correct: boolean) => void;
};

export interface ResultsData {
    score: () => string;
}

export type AnyTopicPageData = TopicTitlePageData | BasicPageData;

export type AnyPageData = PageData | AnyTopicPageData | QuestionPageData;

const isTopicPageData = (page: PageData): page is TopicTitlePageData => {
    return (<TopicPageData>page).topic_id !== undefined;
};

export const TutoralStateHelpers = (state: TutoralStateType) => {
    const CURRENT_TOPIC = () => {
        const page = state.COURSE_DATA.pages[state.CURRENT_PAGE];
        if (isTopicPageData(page)) {
            return page.topic_id;
        } else {
            return -1;
        }
    }, GET_TOPIC_TITLE_PAGE = () => {
        if (CURRENT_TOPIC() !== -1) {
            return state.COURSE_DATA.pages.findIndex((page: AnyTopicPageData) => {
                return (page.topic_id === CURRENT_TOPIC() && page.type === 'topic_title');
            });
        } else {
            return -1;
        }
    }, GET_ALL_TOPIC_TITLES = () => {
        const title_pages =
            state.COURSE_DATA.pages.filter((page) => {
                return page.type === 'topic_title';
            }) as TopicTitlePageData[];
        return Immutable.Map<number, number>().withMutations((map) => {
            for (let page of title_pages) {
                map.set(page.topic_id, state.COURSE_DATA.pages.indexOf(page));
            }
        });
    }, GET_PAGES = () => {
        return Immutable.List<AnyPageData>().withMutations(
            (list) => {
                list.push({ type: 'welcome' });
                list.push(...state.COURSE_DATA.pages);
                list.push({ type: 'results' });
                list.push({ type: 'talktous' });
            }
        );
    }, GET_PAGE_LENGTH = () => {
        return GET_PAGES().size;
    }, GET_PROPER_SCORE = () => {
        // Calculate the Hammings weight of the score. TODO: Make sure this works outside of 32 bit
        let v = state.CURRENT_SCORE - ((state.CURRENT_SCORE >> 1) & 0x55555555);
        v = (v & 0x33333333) + ((v >> 2) & 0x33333333);
        return ((v + (v >> 4) & 0xF0F0F0F) * 0x1010101) >> 24;
    };

    return {
        CURRENT_TOPIC,
        GET_TOPIC_TITLE_PAGE,
        GET_ALL_TOPIC_TITLES,
        GET_PAGES,
        GET_PAGE_LENGTH,
        GET_PROPER_SCORE
    };
};
