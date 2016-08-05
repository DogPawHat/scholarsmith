import {Reducer, Action, combineReducers} from 'redux';
import Immutable from 'immutable';
import { NEXT_PAGE, PREV_PAGE, SELECT_TOPIC, SelectTopicAction} from './actions';
import { TutoralStateType, COURSE_DATA, CURRENT_PAGE, CURRENT_SCORE, ContextData} from './types';

type HandlersType = 
    currentPageHandlersType
    | courseDataHandlersType
    | currentScoreHandlersType;


const initialCurrentState = new TutoralStateType();

class currentPageHandlersType extends Immutable.Record({
    NEXT_PAGE: (state: number, action: Action) => {
        return state + 1
    },
    PREV_PAGE: (state: number, action: Action) => {
        return state - 1;
    },
    SELECT_TOPIC: (state: number, action: SelectTopicAction) => {
            return action.topic_id;
    }
}){
    NEXT_PAGE: Reducer<number>;
    PREV_PAGE: Reducer<number>;
    SELECT_TOPIC: Reducer<number>;
};

class courseDataHandlersType extends Immutable.Record({}){};

class currentScoreHandlersType extends Immutable.Record({}){};

const currentPageHandlers = new currentPageHandlersType();
const courseDataHandlers = new courseDataHandlersType();
const currentScoreHandlers = new currentScoreHandlersType();

const createReducer = <S>(initalState: S, handlers: HandlersType) => {
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