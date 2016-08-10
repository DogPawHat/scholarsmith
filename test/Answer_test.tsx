import test from 'ava';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Answer from '../templates/presentation/Answer';

test((t) => {
    const wrapper = shallow(<Answer index={1} value='hello'/>);
    t.is(wrapper.contains(<input type="radio" name="radio" key="1" value="1">hello</input>), true)
});