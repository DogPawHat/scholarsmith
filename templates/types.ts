import React from 'react';
import Immutable from 'immutable';

export type PageTypes = 
    'plain' 
    | 'topic_title'
    | 'question'
    | 'welcome'
    | 'results'
    | 'talktous'

export const CURRENT_PAGE = 'CURRENT_PAGE';
export const CURRENT_SCORE = 'CURRENT_SCORE';

export type TutoralStateType = Immutable.Map<string, any>;

export interface ContextData{
    title: string;
    pages: Array<PageData>;
}

export interface PageData {
    type: PageTypes;
}

export interface TopicPageData extends PageData {
    tutorial_id: number;
    title?: string;
    text?: string;
}

export interface QuestionPageData extends PageData {

}