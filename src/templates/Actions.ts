import {Action, ActionCreator} from 'redux';

export const NEXT_PAGE = 'NEXT_PAGE';
export const PREV_PAGE = 'PREV_PAGE';
export const SET_PAGE = 'SET_PAGE';

export interface SetPageAction extends Action {
    new_page: number;
}

export interface PageAction extends Action {
    page_length?: number;
}

export const createNextPageAction = (page_length: number) => {
    return <PageAction>{
        type: NEXT_PAGE,
        page_length: page_length
    };
};

export const createPrevPageAction = () => {
    return <PageAction>{
        type: PREV_PAGE
    };
};

export const createSetPageAction = (new_page: number) => {
    return <SetPageAction>{
        type: SET_PAGE,
        new_page: new_page
    };
};
