import {Reducer, Action, combineReducers} from 'redux';
import Immutable from 'immutable';
import { NEXT_PAGE, PREV_PAGE, SELECT_TOPIC, SelectTopicAction} from './actions';

type TutoralStateType = Immutable.Map<string, any>;

const CURRENT_PAGE = 'CURRENT_PAGE';
const CURRENT_SCORE = 'CURRENT_SCORE'

const initialCurrentState = Immutable.Map<string, any>([
    [CURRENT_PAGE, 0],
    [CURRENT_SCORE, 0]
]);

const currentPageHandlers =
    Immutable.Map<string, Reducer<TutoralStateType>>([
        [NEXT_PAGE, (state: TutoralStateType, action: Action) => {
            return state.set(CURRENT_PAGE, state.get(CURRENT_PAGE) + 1)
        }],
        [PREV_PAGE, (state: TutoralStateType, action: Action) => {
            return state.set(CURRENT_PAGE, state.get(CURRENT_PAGE) - 1);
        }],
        [SELECT_TOPIC, (state: TutoralStateType, action: SelectTopicAction) => {
            return state.set(CURRENT_PAGE, action.topic_id);
        }]
    ]);

const currentPage: Reducer<TutoralStateType> = (state: TutoralStateType, action: Action) => {
    return currentPageHandlers.get(action.type)(state, action);
};

const currentScore: Reducer<TutoralStateType> = (state: TutoralStateType, action: Action) => {
    return state;
}

const reducers: Reducer<TutoralStateType> = combineReducers<TutoralStateType>({
    CURRENT_PAGE: currentPage,
    CURRENT_SCORE: currentScore
})

export default reducers;