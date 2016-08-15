import test from 'ava';
import React from 'react';
import { shallow, mount } from 'enzyme';
import TalkToUsPage from '../src/templates/presentation/TalkToUsPage';

test('should be welcoming', t =>{
    const wrapper = shallow(TalkToUsPage());
    t.not(wrapper.html().indexOf('Please Talk to us</p>'), -1);
})
