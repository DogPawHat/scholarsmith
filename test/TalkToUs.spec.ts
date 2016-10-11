import * as test from 'tape';
import * as React from 'react';
import { shallow, mount } from 'enzyme';
import TalkToUsPage from '../src/templates/presentation/TalkToUsPage';

test('should be welcoming', t =>{
    const wrapper = shallow(TalkToUsPage({type: 'talktous'}));
    const p = wrapper.find('p');
    t.is(wrapper.text(), 'Please Talk to us');
})
