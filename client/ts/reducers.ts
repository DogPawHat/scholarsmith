import { Store, Reducer, Action } from 'redux';
import Immutable from 'immutable';
import Actions from '../templates/Actions'



function goToNextPage(state, action){
    return Immutable.Map({
        currentPage: state.currentPage + 1,
        currentScore: state.currentScore
    });
}
