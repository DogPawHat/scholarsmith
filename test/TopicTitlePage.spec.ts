import * as test from 'tape';
import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { TopicTitlePageData} from '../src/templates/types';
import TopicTitlePage from '../src/templates/presentation/TopicTitlePage';

test('should be welcoming', t => {
    const props: TopicTitlePageData = {
        type: 'topic_title',
        topic_id: 0,
        title: 'derp'
    }
    const wrapper = shallow(TopicTitlePage(props));
    const header = wrapper.find('h2');
    t.is(header.text(), 'derp');
})
