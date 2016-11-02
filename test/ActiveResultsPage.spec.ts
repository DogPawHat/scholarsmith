import './helpers/setup-test-env.ts';
import * as test from 'tape';
import * as React from 'react';
import {shallow, mount} from 'enzyme';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {TutoralStateType, ContextData} from '../src/templates/types';
import reducers from '../src/templates/reducers';
import ActiveResultsPage from '../src/templates/container/ActiveResultsPage';


const courseData: ContextData = {
    title: 'Hello!',
    pages: [
        {
            type: 'topic_title',
            topic_id: 0,
            title: 'Introduction!'
        },
        {
            type: 'plain',
            __content: '\r\n\r\nFirst!\r\n',
            topic_id: 0
        },
        {
            type: 'topic_title',
            topic_id: 1,
            title: 'Middle!'
        },
        {
            type: 'plain',
            __content: '\r\n\r\nSecond!\r\n',
            topic_id: 1
        },
        {
            type: 'plain',
            __content: '\r\n\r\nThird!\r\n',
            topic_id: 1
        },
        {
            stem: 'Derp Question 1',
            answers: [
                'Answer 1',
                'Answer 2',
                'Answer 3'
            ],
            correct: 2,
            feedback: 'Derp',
            index: 0,
            type: 'question',
            selectedAnswer: -1
        },
        {
            stem: 'Derp Question 2',
            answers: [
                'Answer 1',
                'Answer 2',
                'Answer 3'
            ],
            correct: 2,
            feedback: 'Derp',
            index: 1,
            type: 'question',
            selectedAnswer: -1
        }
    ]
};

const createProviderWrapper = (initialState: TutoralStateType) => {
    const testStore = createStore(reducers, initialState);
    const provider = React.createElement(
        Provider,
        {store: testStore},
        React.createElement(
            ActiveResultsPage,
            null
    ));
    const wrapper = mount(provider);
    return {testStore, wrapper};
};

test('test that score is passed correctly 1', t => {
    const initialState: TutoralStateType = {
        COURSE_DATA: courseData,
        CURRENT_PAGE: 3,
        CURRENT_SCORE: 1
    };
    t.plan(1);
    const providerOpts = createProviderWrapper(initialState);
    const results = providerOpts.wrapper.find('.results p');
    t.is(results.text(), '1');
});

test('test that score is passed correctly 1', t => {
    const initialState: TutoralStateType = {
        COURSE_DATA: courseData,
        CURRENT_PAGE: 3,
        CURRENT_SCORE: 4
    };
    t.plan(1);
    const providerOpts = createProviderWrapper(initialState);
    const results = providerOpts.wrapper.find('.results p');
    t.is(results.text(), '1');
});
