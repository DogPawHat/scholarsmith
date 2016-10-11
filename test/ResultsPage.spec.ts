import * as test from 'tape';
import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { ResultsData } from '../src/templates/types';
import ResultsPage from '../src/templates/presentation/ResultsPage';

const testScore = (t: test.Test, SCORE: string ) => {
    const data: ResultsData = {
        score: () => {return SCORE;}
    }

    const wrapper = shallow(ResultsPage(data));
    const score_p = wrapper.find('.results p');
    t.is(score_p.text(), SCORE);
}

test('should show the score 1', t => {
    testScore(t, '40%');
})

test('should show the score 2', t => {
    testScore(t, '80%');
})