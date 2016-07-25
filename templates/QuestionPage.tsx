import React from 'react';
import AbstractPage from './AbstractPage'
import {QuestionProps} from './TemplateProps'
import Answer from './Answer'

export default class extends AbstractPage<QuestionProps>{
    constructor(props: QuestionProps){
        super(props);
    }

    render(){
        return(
            <div className="question">
                <h3>Question { this.props.key}</h3>
                <p class="stem">{this.props.stem}</p>
                <form name="answers_{this.props.key}" id="answers_{this.props.key}" data-answer="{this.props.key}">
                    {this.props.answers.map((answer, i) => {
                        <Answer key={i} value={answer} />
                    })}
                    <input type="submit" value="Submit" />
                </form>
                <p class="feedback">{ this.props.feedback }</p>
            </div>
        );
    }
}