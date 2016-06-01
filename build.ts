import * as marked from "marked";
import * as handlebars from "handlebars";
import * as yaml from "js-yaml";
import * as fm from "yaml-front-matter";
import * as fs from "fs";
import * as path from "path";

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

function parseTopics(){
    let topics = [];
    for(let dir of getDirectories("tutorial/topics")){
        console.log(path.join("tutorial",
        "topics",
        dir,
        "config.yaml"));
        let pages = [];
        let configFile = fs.readFileSync(
            path.join("tutorial",
            "topics",
            dir,
            "config.yaml")
        ).toString();
        let configYaml = yaml.safeLoad(configFile);



        for(let file of fs.readdirSync(path.join(
            "tutorial", "topics", dir
        ))){
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


        topics.push({
            title: configYaml.title,
            pages: pages
        });
    }
    return topics
}

for(let file of fs.readdirSync("templates/partials")){
    let partialName = file.split(".")[0];
    handlebars.registerPartial(
        partialName,
        fs.readFileSync(path.join(
                "templates",
                "partials",
                file
            )
        ).toString()
    );
}

let context = {
    topics: []
};

context.topics = parseTopics();

let indexTemplate = handlebars.compile(
    fs.readFileSync("templates/index.hbs").toString()
);

let indexHtml = indexTemplate(context);
fs.writeFileSync("index.html", indexHtml)
