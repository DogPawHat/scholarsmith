import {Reducer, Action, combineReducers, Store} from 'redux';
import Immutable from 'immutable';
import { AnswerQuestionAction, SetPageAction, PageAction} from './actions';
import { TutoralStateType, COURSE_DATA, CURRENT_PAGE, CURRENT_SCORE, ContextData, AnyPageData} from './types';


interface HandlerType {
    <S>(state: S, action: Action): S;
}

interface HandlerCollectionType {
    [key: string]: HandlerType;
}

const initialCurrentState: TutoralStateType = {
    COURSE_DATA: {
        title: '',
        pages: []
    },
    CURRENT_PAGE: 0,
    CURRENT_SCORE: 0
};

// Page increment needs number of pages to prevent out of range
const currentPageHandlers: HandlerCollectionType = {
    NEXT_PAGE: (state: number, action: PageAction) => {
        return state < action.page_length - 1 ? state + 1 : state;
    },
    PREV_PAGE: (state: number, action: PageAction) => {
        return state > 0 ? state - 1 : state;
    },
    SET_PAGE: (state: number, action: SetPageAction) => {
        return action.new_page;
    }
};

const courseDataHandlers: HandlerCollectionType = {};
const currentScoreHandlers: HandlerCollectionType = {
    ANSWER_QUESTION: (state: number, action: AnswerQuestionAction) => {
        return action.correct ? state + 1 : state;
    }
};

const createReducer = <S>(initalState: S, handlers: HandlerCollectionType) => {
    return (state: S = initalState, action: Action) => {
        if (handlers.hasOwnProperty(action.type)) {
            return <S>(handlers[action.type](state, action));
        } else {
            return state;
        }
    };
};

const reducers: Reducer<TutoralStateType> = combineReducers<TutoralStateType>({
    COURSE_DATA: createReducer(initialCurrentState.COURSE_DATA, courseDataHandlers),
    CURRENT_PAGE: createReducer(initialCurrentState.CURRENT_PAGE, currentPageHandlers),
    CURRENT_SCORE: createReducer(initialCurrentState.CURRENT_SCORE, currentScoreHandlers)
});

export default reducers;
