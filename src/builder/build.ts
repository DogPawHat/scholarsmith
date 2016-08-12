import React from "react";
import ReactDOMServer from "react-dom/server"
import yaml from "js-yaml";
import fm from "yaml-front-matter";
import { readdirSync, statSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { ContextData, AnyPageData,PageData, TopicPageData, TopicTitlePageData, BasicPageData, QuestionPageData, PageTypes} from "../templates/types";
import Body from "../templates/server/Body";

function getDirectories(srcpath) {
    return readdirSync(srcpath).filter(function (file) {
        return statSync(join(srcpath, file)).isDirectory();
    });
}

function parseQuestions(): QuestionPageData[] {
    let questions = [];
    yaml.safeLoadAll(
        readFileSync("./tutorial/questions.yaml").toString(),
        (doc: QuestionPageData) => {
            doc.type = 'question';
            questions.push(doc);
        }
    );

    return questions.map((q, i) => {q.index = i; return q});
}

function parseTopics(): TopicPageData[] {
    let pages: TopicPageData[] = [];
    getDirectories("./tutorial/topics").map((dir, i, dirs) => {

        let configFile = readFileSync(
            join(
                "tutorial",
                "topics",
                dir,
                "config.yaml")
        ).toString();

        let configYaml = yaml.safeLoad(configFile);
        pages.push(<TopicTitlePageData>{
            type: "topic_title",
            topic_id: i,
            title: configYaml.title
        });

        for (let file of readdirSync(join(
            "tutorial", "topics", dir
        ))) {
            if (file !== "config.yaml") {
                let contentObj: BasicPageData = fm.loadFront(
                    readFileSync(join(
                        "tutorial",
                        "topics",
                        dir,
                        file
                    ))
                );
                contentObj.topic_id = i;
                pages.push(contentObj);
            }
        }
    });
    return pages;
}

function build() {

    let context: ContextData = {
        title: "Hello!",
        pages: Array<AnyPageData>().concat(
            ...parseTopics(),
            ...parseQuestions()
        )
    };
    
    writeFileSync("./dist/props.json", JSON.stringify(context))
    let indexHtml = ReactDOMServer.renderToStaticMarkup(Body(context))
    writeFileSync("./dist/index.html", indexHtml);
}

build();
