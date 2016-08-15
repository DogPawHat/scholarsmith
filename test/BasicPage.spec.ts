import test from 'ava';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { BasicPageData} from '../src/templates/types';
import BasicPage from '../src/templates/presentation/BasicPage';

const testPage1: BasicPageData = {
    type: "plain",
    __content: "Second!",
    topic_id: 1
}

const testPage2: BasicPageData = {
    type: "plain",
    __content: "Third!",
    topic_id: 1
}

test('should be text in basic page', (t) => {
    const wrapper = shallow(BasicPage(testPage1));
    t.not(wrapper.html().indexOf('Second!'), -1);
});