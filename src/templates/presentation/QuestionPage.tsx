import React from 'react';
import {QuestionPageData} from '../types';

const QuestionPage: React.StatelessComponent<QuestionPageData> = (props: QuestionPageData) => {
    let currentAnswer = 0;

    const updateAnswer = (index: number) => {
        return (e: React.FormEvent) => {
            currentAnswer = index;
        };
    };

    const answerQuestion = (e: React.FormEvent) => {
        props.submitQuestion(props.index, currentAnswer.toString(), currentAnswer === props.correct);
        e.stopPropagation();
        e.preventDefault();
    };

    return (
        <article className='page question'>
            <h3>Question { props.index + 1}</h3>
            <p className='stem'>{props.stem}</p>
            <form name={ 'answers_' + props.index } id={ 'answers_' + props.index} data-answer = { props.correct } onSubmit={answerQuestion} >
                {props.answers.map((answer, i) => (
                    <div key={i}>
                        <input type='radio' name='radio' id={'radio_' + props.index.toString() + '_' + i.toString }  value={i.toString()} onClick={updateAnswer(i) } />
                        <label htmlFor={'radio_' + props.index.toString() + '_' + i }>Answer {i + 1}</label>
                    </div>
                )) }
                <input type='submit' value='Submit' />
            </form>
            <p className='feedback'>{ props.feedback }</p>
        </article>
    );
};

export default QuestionPage;
