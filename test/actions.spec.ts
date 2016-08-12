import test from 'ava';
import {NEXT_PAGE, PREV_PAGE, SET_PAGE, createNextPageAction, createPrevPageAction, createSetPageAction} from '../src/templates/actions';

test('should return action of type NEXT_PAGE', async (t) => {
    const wrapper = createNextPageAction();
    await t.is(wrapper.type, NEXT_PAGE);
});

test('should return action of type PREV_PAGE', async (t) => {
    const wrapper = createPrevPageAction();
    await t.is(wrapper.type, PREV_PAGE);
});

test('should return action of type SET_PAGE with new_page of 2', async (t) => {
    const wrapper = createSetPageAction(2);
    t.is(wrapper.type, SET_PAGE);
    await t.is(wrapper.new_page, 2);
});

test('should return action of type SET_PAGE with new_page of 15', async (t) => {
    const wrapper = createSetPageAction(15);
    t.is(wrapper.type, SET_PAGE);
    await t.is(wrapper.new_page, 15);
});