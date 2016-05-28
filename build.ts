import * as marked from "marked";
import * as handlebars from "handlebars";
import * as fm from "yaml-front-matter";
import * as fs from "fs";
import * as path from "path";

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
    pages: []
};
for(let file of fs.readdirSync("tutorial")){
    let contentObj = fm.loadFront(
        fs.readFileSync(path.join(
            "tutorial",
            file
        ))
    );

    contentObj.markedContent = marked(contentObj.__content);

    context.pages.push(contentObj);
}

let indexTemplate = handlebars.compile(
    fs.readFileSync("templates/index.hbs").toString()
);

let indexHtml = indexTemplate(context);
fs.writeFileSync("index.html", indexHtml)
