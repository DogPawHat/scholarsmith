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
    COURSE_DATA: ContextData
    CURRENT_PAGE: number
    CURRENT_SCORE: number
    CURRENT_TOPIC() {
        const page = this.COURSE_DATA.pages[CURRENT_PAGE].topic_id;
        if (page.type === 'topic_title' || page.type === 'plain') {
            return page.topic_id;
        } else {
            return -1;
        }
    }
    GET_TOPIC_TITLE_PAGE(newPage: number) {
        if(this.CURRENT_TOPIC() !== -1){
            return this.COURSE_DATA.pages.findIndex((page: TopicPageData) => {
                return (page.topic_id === this.CURRENT_TOPIC() || page.type === 'topic_title');
            });
        }else{
            return -1;
        }
    }
    GET_ALL_TOPIC_TITLES(){
        const title_pages = 
            this.COURSE_DATA.pages.filter((page) => {
                return page.type==="topic_title";
            }) as TopicTitlePageData[];
        return Immutable.Map<number, number>().withMutations((map) => {
            for(let page of title_pages){
                map.set(page.topic_id, title_pages.indexOf(page));
            }
        })
    }
}

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