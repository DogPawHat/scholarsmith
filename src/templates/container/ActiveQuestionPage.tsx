import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import QuestionPage from '../presentation/QuestionPage';
import {TutoralStateType} from '../types';
import {createAnswerQuestionAction} from '../actions';

const mapStateToProps = (state: TutoralStateType) => {
    return {};
};

const mapDispatchToProps = (dispatch: Dispatch<TutoralStateType>) => {
    return {
        submitQuestion(question_key: number, answer: string, correct: boolean) {
            dispatch(createAnswerQuestionAction(question_key, answer, correct));
        }
    };
};

const ActiveQuestionPage = connect(mapStateToProps, mapDispatchToProps)(QuestionPage);

export default ActiveQuestionPage;
