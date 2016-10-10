import * as test from 'tape';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { QuestionPageData } from '../src/templates/types';
import QuestionPage from '../src/templates/presentation/QuestionPage';

test('should be welcoming 1', t =>{
    const STEM = 'this should be the title';
    const ANSWERS = [
        'is this the answer',
            'or is this',
            'maybe this'
    ];
    const FEEDBACK = 'you did the thing! I don\'t care';

    const props: QuestionPageData = {
        type: 'question',
        stem: STEM,
        answers: ANSWERS,
        correct: 2,
        feedback: FEEDBACK,
        index: 0
    }

    const wrapper = shallow(QuestionPage(props));
    const stem = wrapper.find('.stem');
    const h3 = wrapper.find('h3');
    const form = wrapper.find('form');
    const feedback = wrapper.find('.feedback');

    t.is(stem.text(), STEM);
    t.is(feedback.text(), FEEDBACK);
    t.is(h3.text(), 'Question 1');
})

test('should be welcoming 2', t =>{
    const STEM = 'this is another title';
    const ANSWERS = [
        'is this the answer',
            'or is this',
            'maybe this'
    ];
    const FEEDBACK = 'you did the thing! I DO care, color me suprised';

    const props: QuestionPageData = {
        type: 'question',
        stem: STEM,
        answers: ANSWERS,
        correct: 2,
        feedback: FEEDBACK,
        index: 4
    }

    const wrapper = shallow(QuestionPage(props));
    const stem = wrapper.find('.stem');
    const h3 = wrapper.find('h3');
    const form = wrapper.find('form');
    const feedback = wrapper.find('.feedback');

    t.is(stem.text(), STEM);
    t.is(feedback.text(), FEEDBACK);
    t.is(h3.text(), 'Question 5');
})

