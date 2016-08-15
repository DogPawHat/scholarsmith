import test from 'ava';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Answer from '../src/templates/presentation/Answer';

test('should have text content hello', (t) => {
    const wrapper = shallow(Answer({index: 1, value: 'hello'}));
    t.is(wrapper.text(), 'hello');
});