import test from 'ava';
import {NEXT_PAGE, PREV_PAGE, SET_PAGE, createNextPageAction, createPrevPageAction, createSetPageAction} from '../src/templates/actions';

test('should return action of type NEXT_PAGE', (t) => {
    const wrapper = createNextPageAction();
    t.is(wrapper.type, NEXT_PAGE);
});

test('should return action of type PREV_PAGE', (t) => {
    const wrapper = createPrevPageAction();
    t.is(wrapper.type, PREV_PAGE);
});

test('should return action of type SET_PAGE with new_page of 2', (t) => {
    const wrapper = createSetPageAction(2);
    t.is(wrapper.type, SET_PAGE);
    t.is(wrapper.new_page, 2);
});

test('should return action of type SET_PAGE with new_page of 15', (t) => {
    const wrapper = createSetPageAction(15);
    t.is(wrapper.type, SET_PAGE);
    t.is(wrapper.new_page, 15);
});