import { Reducer, Action, combineReducers } from 'redux';
import {
    AnswerQuestionAction,
    SetPageAction,
    NextPageAction,
    PreviousPageAction,
    FetchTopicPageRequestAction,
    FetchTopicPageSuccessAction,
    FetchTopicPageFailureAction,
    FetchTopicTitleRequestAction,
    FetchTopicTitleFailureAction,
    FetchTopicTitleSuccessAction
} from './actions';
import { routerReducer, ReactRouterReduxHistory } from 'react-router-redux';
import { parse } from 'marked';

interface HandlerCollectionType<S> {
    [key: string]: Reducer<S>;
}

interface TopicData {
    topic: string;
    id: string;
    title: string;
    content: string;
    isFetching: boolean;
    didInvalidate: boolean;
}

class TutoralStateType {
    constructor(
        readonly CURRENT_PAGE = 0,
        readonly CURRENT_SCORE = 0,
        readonly TOPIC_STATE: TopicData = {
            id: '',
            title: '',
            topic: '',
            content: '',
            isFetching: false,
            didInvalidate: false
        },
        readonly routing: any = {}
    ) { };
}

const initialCurrentState = new TutoralStateType();

// Page increment needs number of pages to prevent out of range
const currentPageHandlers: HandlerCollectionType<number> = {
    NEXT_PAGE: (state, action: NextPageAction) => {
        return state < action.page_length - 1 ? state + 1 : state;
    },
    PREV_PAGE: (state, action: PreviousPageAction) => {
        return state > 0 ? state - 1 : state;
    },
    SET_PAGE: (state, action: SetPageAction) => {
        return action.new_page;
    }
};

const currentScoreHandlers: HandlerCollectionType<number> = {
    ANSWER_QUESTION: (state: number, action: AnswerQuestionAction) => {
        let correctNum = action.correct ? 1 : 0;
        return (state | (correctNum << action.question_key));
    }
};

const topicStateHandlers: HandlerCollectionType<TopicData> = {
    FETCH_TOPIC_PAGE_REQUEST: (state, action: FetchTopicPageRequestAction) => {
        return {
            id: action.id,
            topic: action.topic,
            title: state.title,
            content: 'Fetching',
            isFetching: true,
            didInvalidate: false
        };
    },
    FETCH_TOPIC_PAGE_SUCCESS: (state, action: FetchTopicPageSuccessAction) => {
        return {
            id: action.id,
            topic: action.topic,
            title: state.title,
            content: action.content,
            isFetching: false,
            didInvalidate: false
        };
    },
    FETCH_TOPIC_PAGE_FAILURE: (state, action: FetchTopicPageFailureAction) => {
        return {
            id: action.id,
            topic: action.topic,
            title: state.title,
            content: action.error.toString(),
            isFetching: false,
            didInvalidate: false
        };
    },
    FETCH_TOPIC_TITLE_REQUEST: (state, action: FetchTopicTitleRequestAction) => {
        return {
            id: 'title',
            topic: action.topic,
            title: 'Fetching',
            content: state.content,
            isFetching: true,
            didInvalidate: false
        };
    },
    FETCH_TOPIC_TITLE_SUCCESS: (state, action: FetchTopicTitleSuccessAction) => {
        return {
            id: 'title',
            topic: action.topic,
            title: action.title,
            content: state.content,
            isFetching: false,
            didInvalidate: false
        };
    },
    FETCH_TOPIC_TITLE_FAILURE: (state, action: FetchTopicTitleFailureAction) => {
        return {
            id: 'title',
            topic: action.topic,
            title: action.error.toString(),
            content: state.content,
            isFetching: false,
            didInvalidate: false
        };
    }
};

const createReducer = <S>(initalState: S, handlers: HandlerCollectionType<S>) => {
    return (state: S = initalState, action: Action) => {
        if (handlers.hasOwnProperty(action.type)) {
            return <S>(handlers[action.type](state, action));
        } else {
            return state;
        }
    };
};

const reducers: Reducer<TutoralStateType> = combineReducers<TutoralStateType>({
    CURRENT_PAGE: createReducer(initialCurrentState.CURRENT_PAGE, currentPageHandlers),
    CURRENT_SCORE: createReducer(initialCurrentState.CURRENT_SCORE, currentScoreHandlers),
    TOPIC_STATE: createReducer(initialCurrentState.TOPIC_STATE, topicStateHandlers),
    routing: routerReducer
});

export {
    TutoralStateType,
    reducers
};
export default reducers;
