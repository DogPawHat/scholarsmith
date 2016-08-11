import {Reducer, Action, combineReducers} from 'redux';
import Immutable from 'immutable';
import { NEXT_PAGE, PREV_PAGE, SET_PAGE, SetPageAction} from './actions';
import { TutoralStateType, COURSE_DATA, CURRENT_PAGE, CURRENT_SCORE, ContextData} from './types';

const initialCurrentState: TutoralStateType = {
    COURSE_DATA: {
        title: '',
        pages: []
    },
    CURRENT_PAGE: 0,
    CURRENT_SCORE: 0
}

interface HandlerType {
    [key: string]: <S>(state: S, action: Action) => S; 
}

const currentPageHandlers: HandlerType = {
    NEXT_PAGE: (state: number, action: Action) => {
        return state + 1
    },
    PREV_PAGE: (state: number, action: Action) => {
        return state - 1;
    },
    SET_PAGE: (state: number, action: SetPageAction) => {
            return action.new_page;
    }
};
const courseDataHandlers: HandlerType = {};
const currentScoreHandlers: HandlerType = {};

const createReducer = <S, H>(initalState: S, handlers: HandlerType) => {
    return (state: S = initalState, action: Action) => {
        if(handlers.hasOwnProperty(action.type)){
            return handlers[action.type](state, action)
        } else {
            return state;
        }
    }
};

const reducers: Reducer<TutoralStateType> = combineReducers<TutoralStateType>({
    COURSE_DATA: createReducer(initialCurrentState.COURSE_DATA, courseDataHandlers),
    CURRENT_PAGE: createReducer(initialCurrentState.CURRENT_PAGE, currentPageHandlers),
    CURRENT_SCORE: createReducer(initialCurrentState.CURRENT_SCORE, currentScoreHandlers)
})

export default reducers;