import {Reducer, Action, combineReducers} from 'redux';
import Immutable from 'immutable';
import { NEXT_PAGE, PREV_PAGE, SELECT_TOPIC, SelectTopicAction} from './actions';
import { TutoralStateType, COURSE_DATA, CURRENT_PAGE, CURRENT_SCORE, ContextData} from './types';

const initialCurrentState = new TutoralStateType();

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
    SET_PAGE: (state: number, action: SelectTopicAction) => {
            return action.topic_id;
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