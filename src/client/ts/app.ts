import '../scss/app.scss';

import React from 'react';
import {createStore} from 'redux';
import {render} from 'react-dom';
import InnerBody from '../../templates/container/InnerBody';
import { ContextData } from '../../templates/types'
import axios from 'axios';


axios.get('props.json').then((value) => {
    let body = <ContextData>value.data;
    render(InnerBody(body), document.getElementById('root'));
});