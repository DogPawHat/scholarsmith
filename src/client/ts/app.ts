import '../scss/app.scss';
import {render } from 'react-dom';
import index from '../templates/index';

import { ContextData } from '../../templates/types';
import * as axios from 'axios';

const main = async () => {
    const value = await axios.get('props.json');

    let body = <ContextData>value.data;
    render(index(body), document.getElementById('root'));
};

main();
