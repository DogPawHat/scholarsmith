import { Action, Dispatch, ActionCreator } from 'redux';
import { TutoralStateType } from './reducers'
import { parse } from 'marked';

export class SetPageAction implements Action {
    constructor(
        readonly new_page: number
    ) { };
    type: 'SET_PAGE';
}

export class NextPageAction implements Action {
    constructor(
        readonly page_length: number
    ) { };
    type: 'NEXT_PAGE';
}

export class PreviousPageAction implements Action {
    constructor(
        readonly page_length: number
    ) { };
    type: 'PREV_PAGE';
}

export class ChangeAnswerAction implements Action {
    constructor(
        readonly question_key: number,
        readonly answer: string
    ) { };
    type: 'CHANGE_ANSWER_QUESTION';
}

export class AnswerQuestionAction implements Action {
    constructor(
        readonly question_key: number,
        readonly answer: string,
        readonly correct: boolean
    ) { };
    type: 'ANSWER_QUESTION';
}

export class FetchTopicTitleRequestAction implements Action {
    constructor(
        readonly topic: string,
    ) { };
    type: 'FETCH_TOPIC_TITLE_REQUEST';
}

export class FetchTopicTitleSuccessAction implements Action {
    constructor(
        readonly topic: string,
        readonly title: string
    ) { };
    type: 'FETCH_TOPIC_TITLE_SUCCESS';
}

export class FetchTopicTitleFailureAction implements Action {
    constructor(
        readonly topic: string,
        readonly error: any
    ) { };
    type: 'FETCH_TOPIC_TITLE_FAILURE';
}

export class FetchTopicPageRequestAction implements Action {
    constructor(
        readonly topic: string,
        readonly id: string
    ) { };
    type: 'FETCH_TOPIC_PAGE_REQUEST';
}

export class FetchTopicPageSuccessAction implements Action {
    constructor(
        readonly topic: string,
        readonly id: string,
        readonly content: string
    ) { };
    type: 'FETCH_TOPIC_PAGE_SUCCESS';
}

export class FetchTopicPageFailureAction implements Action {
    constructor(
        readonly topic: string,
        readonly id: string,
        readonly error: any
    ) { };
    type: 'FETCH_TOPIC_PAGE_FAILURE';
}

const fetchTopicPage = (topic: string, id: string) => {
    return async (dispatch) => {
        dispatch(new FetchTopicPageRequestAction(topic, id));
        try {
            const value = await axios.get<string>(`tutorial/topics/${topic}/${id}.md`);
            const parsedValue = parse(value.data);
            dispatch(new FetchTopicPageSuccessAction(topic, id, parsedValue));
        } catch (error) {
            dispatch(new FetchTopicPageFailureAction(topic, id, error));
        };
    };
};

const fetchTopicTitle = (topic: string) => {
    return async (dispatch) => {
        dispatch(new FetchTopicTitleRequestAction(topic));
        try {
            const value = await axios.get<string>(`tutorial/topics/${topic}/config.yaml`);
            const parsedValue = parse(value.data);
            dispatch(new FetchTopicTitleSuccessAction(topic, parsedValue));
        } catch (error) {
            dispatch(new FetchTopicTitleFailureAction(topic, error));
        };
    };
};

const shouldFetchTopicPage = (content, state: TutoralStateType) => {
    const isFetching = state.TOPIC_STATE.isFetching;
    if (!content) {
        return true;
    } else if (isFetching) {
        return false;
    } else {
        return true;
    }
};

export const fetchTopicPageIfNeeded = (topic, id, content) => {
    return (dispatch, getState) => {
        if (shouldFetchTopicPage(content, getState())) {
            return dispatch(fetchTopicPage(topic, id));
        }
    };
};