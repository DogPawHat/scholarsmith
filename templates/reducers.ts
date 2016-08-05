import {Reducer, Action} from 'redux';
import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';
import { NEXT_PAGE, PREV_PAGE, SELECT_TOPIC, SelectTopicAction} from './actions';
import { TutoralStateType,COURSE_DATA,CURRENT_PAGE,CURRENT_SCORE,ContextData} from './types';

const actionHandlers =
    Immutable.Map<string, Reducer<number>>([
        [NEXT_PAGE, (state: number, action: Action) => {
            return state + 1
        }],
        [PREV_PAGE, (state: number, action: Action) => {
            return state - 1;
        }],
        [SELECT_TOPIC, (state: number, action: SelectTopicAction) => {
            return action.topic_id;
        }]
    ]);

const currentPage: Reducer<number> = (state: number, action: Action) => {
    return actionHandlers.get(action.type)(state, action);
};

const currentScore: Reducer<number> = (state: number, action: Action) => {
    return state;
}

const courseData: Reducer<ContextData> = (state: ContextData, action: Action) => {
    return state;
}

const reducers: Reducer<TutoralStateType> = combineReducers<TutoralStateType>({
    COURSE_DATA: courseData,
    CURRENT_PAGE: currentPage,
    CURRENT_SCORE: currentScore
})

export default reducers;