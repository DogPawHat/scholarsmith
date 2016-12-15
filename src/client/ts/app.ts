/// <reference path="../../../node_modules/@types/systemjs/index.d.ts" />

import '../scss/app.scss';

import { ContextData } from '../../templates/types';
import * as axios from 'axios';

const main = async () => {
    const [value, ReactDom, InnerBody] = await Promise.all([
        axios.get('props.json'),
        System.import('react-dom'),
        System.import('../../templates/container/InnerBody')
    ]);

    let body = <ContextData>value.data;
    ReactDom.render(InnerBody(body), document.getElementById('root'));
};

main();
