import '../scss/app.scss';

import React from 'react';
import {createStore} from 'redux';
import {render} from 'react-dom';
import Topics from '../../templates/Topics';
import PageSelect from '../../templates/PageSelect';
import {BodyProps} from '../../templates/TemplateProps';
import axios from 'axios';


axios.get('props.json').then((value) => {
    let body = value.data as BodyProps;
    render(Topics(body.topics), document.getElementById('topics_root'));
    render(
        new PageSelect({topics: body.topics.topics}).render(),
        document.getElementById('page_select_root')
    );
});