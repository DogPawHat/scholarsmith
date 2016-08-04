import React from "react";
import ReactDOMServer from "react-dom/server";
import yaml from "js-yaml";
import fm from "yaml-front-matter";
import fs from "fs";
import path from "path";
import AllProps from "../templates/TemplateProps";
import Body from "../templates/server/Body";

interface PageData {
    type: string;
}

interface TopicPageData extends PageData {
    tutorial_id: number;
    title?: string;
    text?: string;
}

interface QuestionPage extends PageData {

}

function getDirectories(srcpath) {
    return fs.readdirSync(srcpath).filter(function (file) {
        return fs.statSync(path.join(srcpath, file)).isDirectory();
    });
}

function parseQuestions(): QuestionPage[] {
    let questions = [];
    yaml.safeLoadAll(
        fs.readFileSync("./tutorial/questions.yaml").toString(),
        (doc) => {
            doc.type = "question";
            questions.push(doc);
        }
    );

    return questions;
}

function parseTopics(): TopicPageData[] {
    let pages = [];
    getDirectories("./tutorial/topics").map((dir, i, dirs) => {

        let configFile = fs.readFileSync(
            path.join(
                "tutorial",
                "topics",
                dir,
                "config.yaml")
        ).toString();

        let configYaml = yaml.safeLoad(configFile);
        pages.push({
            type: "topic_title",
            topic_id: i,
            title: configYaml.title
        });

        for (let file of fs.readdirSync(path.join(
            "tutorial", "topics", dir
        ))) {
            if (file !== "config.yaml") {
                let contentObj = fm.loadFront(
                    fs.readFileSync(path.join(
                        "tutorial",
                        "topics",
                        dir,
                        file
                    ))
                );
                contentObj.topic_id = i;
                contentObj.text = contentObj.__content;
                pages.push(contentObj);
            }
        }
    });
    return pages;
}

function build() {

    let context = {
        title: "Hello!",
        pages: Array<PageData>().concat(
            parseTopics(),
            parseQuestions()
        )
    };
    
    fs.writeFileSync("./dist/props.json", JSON.stringify(context))
    let indexHtml = ReactDOMServer.renderToString(Body(context))
    fs.writeFileSync("./dist/index.html", indexHtml);
}

build();
