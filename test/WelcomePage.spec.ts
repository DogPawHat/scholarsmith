import test from 'ava';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { BasicPageData} from '../src/templates/types';
import WelcomePage from '../src/templates/presentation/WelcomePage';

test('should be welcoming', t =>{
    const wrapper = shallow(WelcomePage());
    t.not(wrapper.html().indexOf('<h1 class="page current">WELCOME</h1>'), -1);
})
