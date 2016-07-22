import React from "react";
import ReactDOMServer from "react-dom/server";
import yaml from "js-yaml";
import fm from "yaml-front-matter";
import fs from "fs";
import path from "path";
import AllProps from "../templates/TemplateProps";
import Body from "../templates/Body";

function getDirectories(srcpath) {
    return fs.readdirSync(srcpath).filter(function(file) {
        return fs.statSync(path.join(srcpath, file)).isDirectory();
    });
}

function parseQuestions(): AllProps.QuestionProps[] {
    let questions = [];
    yaml.safeLoadAll(
        fs.readFileSync("./tutorial/questions.yaml").toString(),
        function(doc) {
            questions.push(doc);
        }
    );

    return questions;
}

function parseTopics(): AllProps.TopicProps[]{
    let topics = [];
    for (let dir of getDirectories("./tutorial/topics")) {
        console.log(path.join(
            "tutorial",
            "topics",
            dir,
            "config.yaml"));
        let pages = [];
        let configFile = fs.readFileSync(
            path.join(
                "tutorial",
                "topics",
                dir,
                "config.yaml")
        ).toString();
        let configYaml = yaml.safeLoad(configFile);

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
                contentObj.text = contentObj.__content;
                pages.push(contentObj);
            }
        }

        topics.push({
            title: configYaml.title,
            pages: pages
        });
    }
    return topics;
}

function build() {

    let context: AllProps.BodyProps= {
        title: "Hello!",
        topics: {
            topics: parseTopics(),
            questions: parseQuestions()
        }
    };

    fs.writeFileSync("./dist/props.json", JSON.stringify(context))
    let indexHtml = ReactDOMServer.renderToString(Body(context))
    fs.writeFileSync("./dist/index.html", indexHtml);
}

build();
