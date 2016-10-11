import * as test from 'tape';
import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { PageData} from '../src/templates/types';
import WelcomePage from '../src/templates/presentation/WelcomePage';

test('should be welcoming', t => {
    const wrapper = shallow(WelcomePage({type: 'welcome'}));
    t.not(wrapper.html().indexOf('<h1 class="page current">WELCOME</h1>'), -1);
});
