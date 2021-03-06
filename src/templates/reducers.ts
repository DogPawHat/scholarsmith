import { Reducer, Action, combineReducers } from 'redux';
import { AnswerQuestionAction, SetPageAction, PageAction } from './actions';
import { TutoralStateType} from './types';
import { routerReducer } from 'react-router-redux';


interface HandlerType {
    <S>(state: S, action: Action): S;
}

interface HandlerCollectionType {
    [key: string]: HandlerType;
}

const initialCurrentState = {
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
        let correctNum = action.correct ? 1 : 0;
        return(state | (correctNum << action.question_key));
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
    CURRENT_SCORE: createReducer(initialCurrentState.CURRENT_SCORE, currentScoreHandlers),
    routing: routerReducer
});

export default reducers;
