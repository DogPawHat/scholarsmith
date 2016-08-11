import test from 'ava';
import React from 'react';
import { shallow, mount } from 'enzyme';
import {NEXT_PAGE, PREV_PAGE, SET_PAGE, createNextPageAction, createPrevPageAction, createSetPageAction} from '../src/templates/actions';

test(async (t) => {
    const wrapper = createNextPageAction();
    await t.is(wrapper.type, NEXT_PAGE);
});

test(async (t) => {
    const wrapper = createPrevPageAction();
    await t.is(wrapper.type, PREV_PAGE);
});

test(async (t) => {
    const wrapper = createSetPageAction(2);
    t.is(wrapper.type, SET_PAGE);
    await t.is(wrapper.new_page, 2);
});

test(async (t) => {
    const wrapper = createSetPageAction(15);
    t.is(wrapper.type, SET_PAGE);
    await t.is(wrapper.new_page, 15);
});