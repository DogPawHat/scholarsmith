import * as test from 'tape';
import reducers from '../src/templates/reducers';
import {NEXT_PAGE, PREV_PAGE, SET_PAGE} from '../src/templates/actions';


test('unrecognised actions should return same state', (t) => {
    const oldState = {
        COURSE_DATA: {
            title: '',
            pages: []
        },
        CURRENT_PAGE: 0,
        CURRENT_SCORE: 0
    }

    const action = {
        type: 'HERP_A_DERP'
    }

    const newState = reducers(oldState, action);

    t.is(newState.CURRENT_SCORE, oldState.CURRENT_SCORE);
    t.is(newState.COURSE_DATA, oldState.COURSE_DATA);
    t.is(newState.CURRENT_PAGE, oldState.CURRENT_PAGE);
    t.end();
});

test('NEXT_PAGE should only change CURRENT_PAGE', (t) => {
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

    const action = {
        type: NEXT_PAGE,
        page_length: 6
    }

    const newState = reducers(oldState, action);

    t.is(newState.CURRENT_SCORE, oldState.CURRENT_SCORE);
    t.is(newState.COURSE_DATA, oldState.COURSE_DATA);
    t.is(newState.CURRENT_PAGE, expectedState.CURRENT_PAGE);
    t.end();
});


test('NEXT_PAGE should not go past page length', (t) => {
    const oldState = {
        COURSE_DATA: {
            title: '',
            pages: []
        },
        CURRENT_PAGE: 5,
        CURRENT_SCORE: 0
    }

    const expectedState = {
        COURSE_DATA: {
            title: '',
            pages:[]
        },
        CURRENT_PAGE: 5,
        CURRENT_SCORE: 0
    }

    const action = {
        type: NEXT_PAGE,
        page_length: 6
    }

    const newState = reducers(oldState, action);

    t.is(newState.CURRENT_SCORE, oldState.CURRENT_SCORE);
    t.is(newState.COURSE_DATA, oldState.COURSE_DATA);
    t.is(newState.CURRENT_PAGE, expectedState.CURRENT_PAGE);
    t.end();
});

test('PREV_PAGE should only change CURRENT_PAGE', (t) => {
    const oldState = {
        COURSE_DATA: {
            title: '',
            pages: []
        },
        CURRENT_PAGE: 4,
        CURRENT_SCORE: 0
    }

    const expectedState = {
        COURSE_DATA: {
            title: '',
            pages:[]
        },
        CURRENT_PAGE: 3,
        CURRENT_SCORE: 0
    }

    const action = {
        type: PREV_PAGE
    }

    const newState = reducers(oldState, action);

    t.is(newState.CURRENT_SCORE, oldState.CURRENT_SCORE);
    t.is(newState.COURSE_DATA, oldState.COURSE_DATA);
    t.is(newState.CURRENT_PAGE, expectedState.CURRENT_PAGE);
    t.end();
});

test('PREV_PAGE should not go below zero', (t) => {
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
        CURRENT_PAGE: 0,
        CURRENT_SCORE: 0
    }

    const action = {
        type: PREV_PAGE
    }

    const newState = reducers(oldState, action);

    t.is(newState.CURRENT_SCORE, oldState.CURRENT_SCORE);
    t.is(newState.COURSE_DATA, oldState.COURSE_DATA);
    t.is(newState.CURRENT_PAGE, expectedState.CURRENT_PAGE);
    t.end();
});

test('SET_PAGE should only change CURRENT_PAGE', (t) => {
    const oldState = {
        COURSE_DATA: {
            title: '',
            pages: []
        },
        CURRENT_PAGE: 7,
        CURRENT_SCORE: 0
    }

    const expectedState = {
        COURSE_DATA: {
            title: '',
            pages:[]
        },
        CURRENT_PAGE: 2,
        CURRENT_SCORE: 0
    }

    const action = {
        type: SET_PAGE,
        new_page: 2
    }

    const newState = reducers(oldState, action);

    t.is(newState.CURRENT_SCORE, oldState.CURRENT_SCORE);
    t.is(newState.COURSE_DATA, oldState.COURSE_DATA);
    t.is(newState.CURRENT_PAGE, expectedState.CURRENT_PAGE);
    t.end();
});