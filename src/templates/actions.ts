import {Action} from 'redux';

export const NEXT_PAGE = 'NEXT_PAGE';
export const PREV_PAGE = 'PREV_PAGE';
export const SET_PAGE = 'SET_PAGE';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export interface SetPageAction extends Action {
    new_page: number;
}

export interface PageAction extends Action {
    page_length?: number;
}

export interface AnswerQuestionAction extends Action {
    question_key: number;
    answer: string;
    correct: boolean;
}

export const createAnswerQuestionAction = (question_key: number, answer: string, correct: boolean) => {
    return <AnswerQuestionAction>{
        type: ANSWER_QUESTION,
        question_key: question_key,
        answer: answer,
        correct: correct
    };
};


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
