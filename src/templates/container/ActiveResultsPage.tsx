import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {TutoralStateType, TutoralStateHelpers} from '../types';
import ResultsPage from '../presentation/ResultsPage';



const mapStateToProps = (state: TutoralStateType) => {
    return {
        score: () => { return TutoralStateHelpers(state).GET_PROPER_SCORE().toString(); }
    };
};

const mapDispatchToProps = (dispatch: Dispatch<TutoralStateType>) => {
    return {
    };
};


const ActiveResultsPage = connect(mapStateToProps, mapDispatchToProps)(ResultsPage);

export default ActiveResultsPage;
