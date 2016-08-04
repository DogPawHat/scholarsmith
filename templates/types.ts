import React from 'react';

export interface ContextData{
    title: string;
    pages: Array<PageData>;
}

export interface PageData {
    type: string;
}

export interface TopicPageData extends PageData {
    tutorial_id: number;
    title?: string;
    text?: string;
}

export interface QuestionPage extends PageData {

}