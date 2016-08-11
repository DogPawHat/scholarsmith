import test from 'ava';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Answer from './test_lib/templates/presentation/Answer';

test((t) => {
    const wrapper = shallow(<Answer index={1} value='hello'/>);
    t.is(wrapper.text(), 'hello');
});