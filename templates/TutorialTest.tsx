import React from "react";
import {Route} from "react-router";
import AbstractPage from "./AbstractPage";
import {TutorialTestProps} from "./TemplateProps";
import QuestionPage from "./QuestionPage";
import ResultsPage from "./ResultsPage"

export default function(props: TutorialTestProps) {
    return (
        <div className="tutorialtest">
            {props.questions.map((question, i) => {
                <Route {...question} component={QuestionPage} path="{i}" key={i}/>;
            })}
            <ResultsPage />
        </div>
    )
}