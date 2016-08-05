import React from 'react';
import Immutable from 'immutable';

export type PageTypes =
    'plain'
    | 'topic_title'
    | 'question'
    | 'welcome'
    | 'results'
    | 'talktous';

export const COURSE_DATA = 'COURSE_DATA';
export const CURRENT_PAGE = 'CURRENT_PAGE';
export const CURRENT_SCORE = 'CURRENT_SCORE';

export class TutoralStateType extends Immutable.Record(
    {
        COURSE_DATA: {
            title: '',
            pages: [],
        },
        CURRENT_PAGE: 0,
        CURRENT_SCORE: 0
    }
) {
    COURSE_DATA: ContextData;
    CURRENT_PAGE: number;
    CURRENT_SCORE: number;
};

export interface ContextData {
    title: string;
    pages: Array<PageData>;
};

export interface PageData {
    type: PageTypes;
};

export interface TopicPageData extends PageData {
    type: PageTypes;
    topic_id: number;
};

export interface TopicTitlePageData extends TopicPageData {
    title: string;
};

export interface BasicPageData extends TopicPageData {
    __content: string;
};

export type AnyTopicPageData = TopicTitlePageData | BasicPageData;

export interface QuestionPageData extends PageData {
    stem: string;
    answers: Array<string>;
    correct: number;
    feedback: string;
    index: number;
};