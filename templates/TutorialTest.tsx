import React from "react";
import AbstractPage from "./AbstractPage";
import {AnswerProps, QuestionProps, TutorialTestProps} from "./TemplateProps"

function Answer(props: AnswerProps){
    return(
        <input type="radio" name="radio" value="{props.key}">{ props.value }</input>
    );
}

class QuestionPage extends AbstractPage<QuestionProps>{
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
                        return <Answer key={i} value={answer} />
                    })}
                    <input type="submit" value="Submit" />
                </form>
                <p class="feedback">{ this.props.feedback }</p>
            </div>
        );
    }
}

class ResultsPage extends AbstractPage<{}>{
    render(){
        return(
            <div className="results page">
                <h1>Results</h1>
                <p>SCORE SHOULD GO HERE</p>
            </div>
        );
    }
}

export default function(props: TutorialTestProps) {
    return (
        <div className="tutorialtest">
            {props.questions.map((question, i) => {
                return new QuestionPage(question);
            })}
            <ResultsPage />
        </div>
    )
}