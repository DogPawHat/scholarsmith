import * as test from 'tape';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { BasicPageData } from '../src/templates/types';
import BasicPage from '../src/templates/presentation/BasicPage';
import Page from '../src/templates/presentation/Page';


const testPage: BasicPageData = {
    type: 'plain',
    __content: 'Second!',
    topic_id: 1
};

const getPageInPage = () => {
    return {
        childPage: BasicPage,
        pageData: testPage
    };
};

test('should have children', (t) => {
    const wrapper = shallow(Page(getPageInPage()));
    t.is(wrapper.html().indexOf('Third!</p>'), -1);
    t.not(wrapper.html().indexOf('Second!</p>'), -1);
    t.is(wrapper.html().indexOf('Second!</p>') < wrapper.html().indexOf('</section>'), true);
});
