import { renderToString } from 'react-dom/server';
import { match, RoutingContext, createMemoryHistory } from 'react-router';
import { compile } from 'handlebars';
import { safeLoadAll, safeLoad } from 'js-yaml';
import * as fm from 'yaml-front-matter';
import { readdir, stat, readFile, writeFile } from 'mz/fs';
import { join, resolve } from 'path';
import { ContextData, AnyPageData, TopicPageData, TopicTitlePageData, BasicPageData, QuestionPageData } from '../templates/types';
import Body from '../templates/server/Body';
import TopicTitlePage from '../templates/presentation/TopicTitlePage';
import BasicPage from '../templates/presentation/BasicPage';
import QuestionPage from '../templates/presentation/QuestionPage';
import routes from '../templates/routes';

const getTopicPaths = async () => {
    const topicPath = resolve(__dirname, 'tutorial', 'topics');

    const topicIndexes = (await readdir(topicPath)).filter((file) => {
        return (await stat(file)).isDirectory();
    });

    const topicPages = topicIndexes.reduce<string[]>((a, b) => {
        const pages = (await readdir(b)).filter((file) => {
            return file.indexOf('.md') !== -1;
        }).map((value) => {
            return value.replace('.md', '').trim();
        });

        return [...a, ...pages];
    }, []);

    return [...topicIndexes, ...topicPages];
};

const parseQuestions = async () => {
    let questions: string[] = [];
    safeLoadAll(
        await readFile('./tutorial/questions.yaml').toString(),
        (doc: QuestionPageData) => {
            doc.type = 'question';
            questions.push(
                renderToString(QuestionPage(doc))
            );
        }
    );

    return questions;
};

const sellQuestionsAndQuestionPaths = async () => {
    const questions = await parseQuestions();
    const quesitonPaths = questions.map((q, i, qs) => {
        return `/questions/${i + 1}`;
    });

    return {
        questions: questions,
        questionPaths: quesitonPaths
    };
};

const render = (locals, callback) => {
    readFile('./src/server/index.hbs').then((file) => {
        const history = createMemoryHistory();
        const location = history.createLocation(locals.path);
        const template = compile(file.toString());

        match({ routes, location }, (error, redirectLocation, renderProps) => {

            callback(null, template({
                html: renderToString(RoutingContext(renderProps))
            }));
        });
    });

};

export render;
