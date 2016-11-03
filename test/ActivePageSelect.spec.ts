import './helpers/setup-test-env.ts';
import * as test from 'tape';
import * as React from 'react';
import {mount} from 'enzyme';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {TutoralStateType, ContextData} from '../src/templates/types';
import reducers from '../src/templates/reducers';
import ActivePageSelect from '../src/templates/container/ActivePageSelect';


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
            ActivePageSelect,
            null
    ));
    const wrapper = mount(provider);
    return {testStore, wrapper};
};

test('length of li tags', t => {
    const initialState: TutoralStateType = {
        COURSE_DATA: courseData,
        CURRENT_PAGE: 3,
        CURRENT_SCORE: 0
    };
    t.plan(1);
    const providerOpts = createProviderWrapper(initialState);
    const lis = providerOpts.wrapper.find('li');
    t.equal((lis.length - lis.find('.arrow').length), 2);
});

test('go back', t => {
    const initialState: TutoralStateType = {
        COURSE_DATA: courseData,
        CURRENT_PAGE: 3,
        CURRENT_SCORE: 0
    };
    t.plan(1);
    const providerOpts = createProviderWrapper(initialState);
    const back = providerOpts.wrapper.find('li.arrow').at(0);
    back.simulate('click');
    t.equal(providerOpts.testStore.getState().CURRENT_PAGE, 2);
});

test('go forward', t => {
    const initialState: TutoralStateType = {
        COURSE_DATA: courseData,
        CURRENT_PAGE: 3,
        CURRENT_SCORE: 0
    };
    t.plan(1);
    const providerOpts = createProviderWrapper(initialState);
    const forward = providerOpts.wrapper.find('li.arrow').at(1);
    forward.simulate('click');
    t.equal(providerOpts.testStore.getState().CURRENT_PAGE, 4);
});
