import './helpers/setup-test-env.ts';
import * as test from 'tape';
import * as React from 'react';
import * as Immutable from 'Immutable';
import { mount } from 'enzyme';
import PageSelect from '../src/templates/presentation/PageSelect';
import { PageSelectData } from '../src/templates/types';

const getTestPage = (t: test.Test) => {
    const r: PageSelectData = {
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
    return r;
};

test('should initialize things properly', (t: test.Test) => {
    const testPage = getTestPage(t);
    t.plan(2);
    const wrapper = mount(PageSelect(testPage));
    const forward = wrapper.find('.arrow').at(0);
    const back = wrapper.find('.arrow').at(1);
    const second = wrapper.find('li').at(2);
    forward.simulate('click');
    back.simulate('click');
    second.simulate('click');
});
