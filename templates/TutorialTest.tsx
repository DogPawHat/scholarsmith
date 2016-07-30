import React from "react";
import AbstractPage from "./AbstractPage";
import {TutorialTestProps} from "./TemplateProps";
import QuestionPage from "./QuestionPage";
import ResultsPage from "./ResultsPage"

export default function(props: TutorialTestProps) {
    return (
        <div className="tutorialtest">
            {props.questions.map((question, i) => {
                <QuestionPage {...question} key={i}/>;
            })}
            <ResultsPage />
        </div>
    )
}