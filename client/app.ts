import React from 'react';
import {render} from 'react-dom';
import Body from '../templates/Body'
import {BodyProps} from '../templates/TemplateProps'
import axios from 'axios';

axios.get('props.json').then((value) => {
    render(Body(value.data as BodyProps), document.getElementById('root'));
});