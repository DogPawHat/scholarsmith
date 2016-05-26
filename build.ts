import Marked from "marked";
import Handlebars from "handlebars";
import fm from "yaml-front-matter";
import fs from "fs";
import path from "path";

interface contextStatic{
    pages: {}[]
}

for(let file of fs.readdirSync("templates/partials")){
    let partialName = file.split(".")[0];
    Handlebars.registerPartial(
        partialName,
        fs.readFileSync(path.join(
                "templates",
                "partials",
                file
            )
        )
    );
}

let context: contextStatic;
let pages: {}[];
for(let file of fs.readdirSync("tutorial")){
    let contentObj = fm.loadFront(
        fs.readFileSync(path.join(
            "tutorial",
            file
        ))
    );

    contentObj.__content = marked.parse(contentObj.__content);

    context.pages.push(contentObj);
}


let indexTemplate = Handlebars.compile(fs.readFileSync("templates/index.hbs"));

let indexHtml = indexTemplate(context)
