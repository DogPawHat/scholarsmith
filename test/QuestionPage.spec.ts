import './helpers/setup-test-env.ts';
import * as test from 'tape';
import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { QuestionPageData } from '../src/templates/types';
import QuestionPage from '../src/templates/presentation/QuestionPage';

const submitQuestionMockCorrectAndEndTest = (t: test.Test) => {
    return (question_key: number, answer: string, correct: boolean) => {
        t.true(correct);
        t.end();
    };
};

const submitQuestionMockIncorrectAndEndTest = (t: test.Test) => {
    return (question_key: number, answer: string, correct: boolean) => {
        t.false(correct);
        t.end();
    };
};

test('should be a question 1', t => {
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
        index: 0,
        submitQuestion: submitQuestionMockCorrectAndEndTest(t)
    };

    const wrapper = shallow(QuestionPage(props));
    const stem = wrapper.find('.stem');
    const h3 = wrapper.find('h3');
    const form = wrapper.find('form');
    const feedback = wrapper.find('.feedback');

    t.is(stem.text(), STEM);
    t.is(feedback.text(), FEEDBACK);
    t.is(h3.text(), 'Question 1');
    t.end();
});

test('should be a question 2', t => {
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
        index: 4,
        submitQuestion: submitQuestionMockCorrectAndEndTest(t)
    };

    const wrapper = shallow(QuestionPage(props));
    const stem = wrapper.find('.stem');
    const h3 = wrapper.find('h3');
    const form = wrapper.find('form');
    const feedback = wrapper.find('.feedback');

    t.is(stem.text(), STEM);
    t.is(feedback.text(), FEEDBACK);
    t.is(h3.text(), 'Question 5');
    t.end();
});

test('should answer the question correcly', t => {
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
        index: 4,
        submitQuestion: submitQuestionMockCorrectAndEndTest(t)
    };

    const wrapper = mount(QuestionPage(props)).find('.page');
    const inputAnswer = wrapper.find('#radio_4_2');
    const form = wrapper.find('form');
    t.equal(wrapper.length, 1);
    t.equal(inputAnswer.length, 1);
    inputAnswer.simulate('click');
    form.simulate('submit');
});

test('should answer the question incorrectly', t => {
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
        index: 4,
        submitQuestion: submitQuestionMockIncorrectAndEndTest(t)
    };

    const wrapper = mount(QuestionPage(props)).find('.page');
    const inputAnswer = wrapper.find('#radio_4_0');
    const form = wrapper.find('form');
    t.equal(wrapper.length, 1);
    t.equal(inputAnswer.length, 1);
    inputAnswer.simulate('click');
    form.simulate('submit');
});
