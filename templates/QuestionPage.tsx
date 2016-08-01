import React from 'react';
import {QuestionProps} from './TemplateProps';
import Answer from './Answer';

export default function (props: QuestionProps) {
    return (
        <div className="question">
            <h3>Question { props.key }</h3>
            <p class="stem">{props.stem}</p>
            <form name="answers_{props.key}" id="answers_{props.key}" data-answer="{props.key}">
                {props.answers.map((answer, i) => {
                    <Answer key={i} value={answer} />
                }) }
                <input type="submit" value="Submit" />
            </form>
            <p class="feedback">{ props.feedback }</p>
        </div>
    );
}