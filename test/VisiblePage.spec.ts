import {test, CallbackTestContext} from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {TutoralStateType, ContextData} from '../src/templates/types';
import reducers from '../src/templates/reducers';
import VisiblePage from '../src/templates/container/VisablePage';

const courseData: ContextData = {
    title: "Hello!",
    pages: [
        {
            type: "topic_title",
            topic_id: 0,
            title: "Introduction!"
        },
        {
            type: "plain",
            __content: "\r\n\r\nFirst!\r\n",
            topic_id: 0
        },
        {
            type: "topic_title",
            topic_id: 1,
            title: "Middle!"
        },
        {
            type: "plain",
            __content: "\r\n\r\nSecond!\r\n",
            topic_id: 1
        },
        {
            type: "plain",
            __content: "\r\n\r\nThird!\r\n",
            topic_id: 1
        },
        {
            stem: "Derp Question 1",
            answers: [
                "Answer 1",
                "Answer 2",
                "Answer 3"
            ],
            correct: 2,
            feedback: "Derp",
            type: "question"
        },
        {
            stem: "Derp Question 2",
            answers: [
                "Answer 1",
                "Answer 2",
                "Answer 3"
            ],
            correct: 2,
            feedback: "Derp",
            type: "question"
        }
    ]
};


const testVisiblePage = (t:CallbackTestContext, initialState: TutoralStateType) => {
    const testStore = createStore(reducers, initialState);
    const provider = React.createElement(
        Provider,
        {store: testStore},
        VisiblePage(null));
    const wrapper = shallow(provider);
}


test('', t => {
    const initialState: TutoralStateType = {
        COURSE_DATA: courseData,
        CURRENT_PAGE: 3,
        CURRENT_SCORE: 0
    }
})