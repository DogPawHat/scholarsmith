import { renderToString } from 'react-dom/server';
import { safeLoadAll, safeLoad } from 'js-yaml';
import * as fm from 'yaml-front-matter';
import { readdir, stat, readFile, writeFile } from 'mz/fs';
import { join, resolve } from 'path';
import { ContextData, AnyPageData, TopicPageData, TopicTitlePageData, BasicPageData, QuestionPageData } from '../templates/types';
import Body from '../templates/server/Body';
import TopicTitlePage from '../templates/presentation/TopicTitlePage';
import BasicPage from '../templates/presentation/BasicPage';
import QuestionPage from '../templates/presentation/QuestionPage';

const getRoutes = async () => {
    return [
        '/',
        ...await getTopicPaths(),
        ...await 
]};

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

    return [...topicIndexes, ...topicPages]
}

const parseQuestions = async () => {
    let questions: QuestionPageData[] = [];
    safeLoadAll(
        await readFile('./tutorial/questions.yaml').toString(),
        (doc: QuestionPageData) => {
            doc.type = 'question';
            questions.push(renderToString(doc));
        }
    );

    return questions.map((q, i) => { q.index = i; return q; });
};

const parseTopicTitle = async (file, i, files) => {
    let configFile = await readFile(file).toString();

    let configYaml = safeLoad(configFile);
    return renderToString(TopicTitlePage({
        type: 'topic_title',
        topic_id: i,
        title: configYaml.title
    }));
};

const parseTopicPage = async (file, i, files) => {
    let contentObj: BasicPageData = fm.loadFront(
        await readFile(file)
    );
    contentObj.topic_id = i;
    return renderToString(BasicPage(contentObj));
};




const render = (locals) => {

    let context: ContextData = {
        title: 'Hello!',
        pages: Array<AnyPageData>().concat(
            ...parseTopics(),
            ...parseQuestions()
        )
    };

    writeFileSync('./dist/props.json', JSON.stringify(context));
    let indexHtml = renderToMarkup(Body(context));
    writeFileSync('./dist/index.html', indexHtml);
};

export render;
