import marked from "marked";
import handlebars from "handlebars";
import yaml from "js-yaml";
import fm from "yaml-front-matter";
import fs from "fs";
import path from "path";

function getDirectories(srcpath) {
    return fs.readdirSync(srcpath).filter(function(file) {
        return fs.statSync(path.join(srcpath, file)).isDirectory();
    });
}

function parseQuestions() {
    let questions = [];
    yaml.safeLoadAll(
        fs.readFileSync("./tutorial/questions.yaml").toString(),
        function(doc) {
            if(questions.length === 0){
                doc.class = "testquestion"
            }else{
                doc.class = "testquestion"
            }
            questions.push(doc);
        }
    );

    return questions;
}

function parseTopics() {
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
                contentObj.markedContent = marked(contentObj.__content);
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

function buildTopics(topics){
    let context = [];
    let topicTemplate = handlebars.compile(
        fs.readFileSync("./templates/topic.hbs").toString()
    );
    for(let topic of topics){
        context.push(topicTemplate(topic));
    }
    return context;
}

function buildTest(test){
    let testTemplate = handlebars.compile(
        fs.readFileSync("./templates/tutorialtest.hbs").toString()
    );
    return testTemplate(test);
}

function build() {
    handlebars.registerHelper("inc", function(value, options) {
        return parseInt(value) + 1;
    });

    let context = {
        topics: "",
        questions: ""
    };

    context.topics = buildTopics(parseTopics());
    context.questions = buildTest(parseQuestions());

    let indexTemplate = handlebars.compile(
        fs.readFileSync("./templates/index.hbs").toString()
    );

    let indexHtml = indexTemplate(context);
    fs.writeFileSync("./dist/index.html", indexHtml);
}

build();
