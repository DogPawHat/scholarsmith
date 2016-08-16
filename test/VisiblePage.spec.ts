import {test, ContextualTestContext} from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {TutoralStateType, ContextData, PageTypes} from '../src/templates/types';
import {createNextPageAction, createSetPageAction, createPrevPageAction} from '../src/templates/actions'
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

const createProviderWrapper = (initialState: TutoralStateType) => {
    const testStore = createStore(reducers, initialState);
    const provider = React.createElement(
        Provider,
        {store: testStore},
        React.createElement(
            VisiblePage,
            null
    ));
    const wrapper = mount(provider);
    return {testStore, wrapper};
}


test('test state 1', t => {
    const initialState: TutoralStateType = {
        COURSE_DATA: courseData,
        CURRENT_PAGE: 3,
        CURRENT_SCORE: 0
    };
    const providerOpts = createProviderWrapper(initialState);
    t.is(providerOpts.wrapper.html().indexOf('Second!'), -1);
    providerOpts.testStore.dispatch(createNextPageAction());
    t.is(providerOpts.wrapper.html().indexOf('Third!'), -1);
});

test('test state 2', t => {
    const initialState: TutoralStateType = {
        COURSE_DATA: courseData,
        CURRENT_PAGE: 3,
        CURRENT_SCORE: 0
    };
    const providerOpts = createProviderWrapper(initialState);
    t.is(providerOpts.wrapper.html().indexOf('Second!'), -1);
    providerOpts.testStore.dispatch(createPrevPageAction());
    t.is(providerOpts.wrapper.html().indexOf('Third!'), -1);
})