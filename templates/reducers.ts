import Redux from 'redux';
import Immutable from 'immutable';
import actions from './actions';

interface TutoralState extends Immutable.Map<string, any> {
    currentPage: number,
    currentScore: number
}

const goToNextPage: Redux.Reducer<Immutable.Map<string, any>> = function (state:TutoralState, action: Redux.Action) {
    return state.set("currentPage", state.currentPage + 1);
};

const goToPrevPage: Redux.Reducer<Immutable.Map<string, any>> = function (state:TutoralState, action: Redux.Action) {
    return state.set("currentPage", state.currentPage - 1);
};

const setTopicId: Redux.Reducer<Immutable.Map<string, any>> = function (state:TutoralState, action: actions.SelectTopicAction) {
    return state.set("currentPage", action.topic_id);
};