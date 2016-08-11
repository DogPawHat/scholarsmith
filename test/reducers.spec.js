import test from 'ava';
import React from 'react';
import { shallow, mount } from 'enzyme';
import reducers from '../src/templates/reducers';
import {NEXT_PAGE, PREV_PAGE, SET_PAGE} from '../src/templates/actions';

test(async (t) => {
    const oldState = {
        COURSE_DATA: {
            title: '',
            pages: []
        },
        CURRENT_PAGE: 0,
        CURRENT_SCORE: 0
    }

    const expectedState = {
        COURSE_DATA: {
            title: '',
            pages:[]
        },
        CURRENT_PAGE: 1,
        CURRENT_SCORE: 0
    }

    const unExpectedState = {
        COURSE_DATA: {
            title: '',
            pages:[]
        },
        CURRENT_PAGE: 0,
        CURRENT_SCORE: 1
    }

    const action = {
        type: NEXT_PAGE
    }

    const newState = reducers(oldState, action);

    t.not(newState.CURRENT_SCORE, unExpectedState.CURRENT_SCORE);
    await t.is(newState.CURRENT_PAGE, expectedState.CURRENT_PAGE);

})