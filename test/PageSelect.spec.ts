import './helpers/setup-test-env.ts';
import * as test from 'tape';
import * as React from 'react';
import * as Immutable from 'immutable';
import { mount } from 'enzyme';
import PageSelect from '../src/templates/presentation/PageSelect';
import { PageSelectData } from '../src/templates/types';

const getTestPage: (t: test.Test) => PageSelectData = t => {
    return {
        goBack: () => { t.pass('went back'); },
        goForward: (pageLength: number) => { t.pass('went forward');},
        createGoToTopic: (
            topics: Immutable.Map<number, number>,
            topic: number
        ) => {
            return () => {
                t.notEqual(topics.get(topic), undefined);
            };
        },
        pageLength: 9,
        topics: Immutable.Map<number, number>([
            [0, 1],
            [1, 3],
            [2, 5]
        ])
    };
};

test('should initialize things properly', t => {
    const testPage = getTestPage(t);
    t.plan(3);
    const wrapper = mount(PageSelect(testPage));
    const forward = wrapper.find('.arrow#a_forward a');
    const back = wrapper.find('.arrow#a_back a');
    const second = wrapper.find('li#topic_1 a');
    forward.simulate('click');
    back.simulate('click');
    second.simulate('click');
});
