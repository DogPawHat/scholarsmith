import '../scss/app.scss';

import * as React from 'react';
import {render} from 'react-dom';
import InnerBody from '../../templates/container/InnerBody';
import { ContextData } from '../../templates/types';
import axios from 'axios';


axios.get('props.json').then((value) => {
    let body = <ContextData>value.data;
    render(InnerBody(body), document.getElementById('root'));
});
