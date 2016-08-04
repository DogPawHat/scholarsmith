import React from 'react';

export type PageTypes = 
    'plain' 
    | 'topic_title'
    | 'question'

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