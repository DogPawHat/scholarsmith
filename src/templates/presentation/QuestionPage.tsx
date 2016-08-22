import React from 'react';
import {QuestionPageData} from '../types';
import Answer from './Answer';

const QuestionPage: React.StatelessComponent<QuestionPageData> = (props: QuestionPageData) => {
    return (
        <div className='question'>
            <h3>Question { props.index + 1}</h3>
            <p className='stem'>{props.stem}</p>
            <form name='answers_{props.index}' id='answers_{props.index}' data-answer='{props.index}'>
                {props.answers.map((answer, i) => {
                    <Answer key={i} index={i} value={answer} />;
                }) }
                <input type='submit' value='Submit' />
            </form>
            <p className='feedback'>{ props.feedback }</p>
        </div>
    );
};

export default QuestionPage;
