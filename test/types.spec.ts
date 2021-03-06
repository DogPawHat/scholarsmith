import * as test from 'tape';
import * as Immutable from 'immutable';
import { TutoralStateType, TutoralStateHelpers, ContextData, AnyTopicPageData, AnyPageData} from '../src/templates/types';

const courseData: ContextData = {
    title: 'Hello!',
    pages: [
        {
            type: 'topic_title',
            topic_id: 0,
            title: 'Introduction!'
        },
        {
            type: 'plain',
            __content: '\r\n\r\nFirst!\r\n',
            topic_id: 0
        },
        {
            type: 'topic_title',
            topic_id: 1,
            title: 'Middle!'
        },
        {
            type: 'plain',
            __content: '\r\n\r\nSecond!\r\n',
            topic_id: 1
        },
        {
            type: 'plain',
            __content: '\r\n\r\nThird!\r\n',
            topic_id: 1
        },
        {
            stem: 'Derp Question 1',
            answers: [
                'Answer 1',
                'Answer 2',
                'Answer 3'
            ],
            correct: 2,
            feedback: 'Derp',
            type: 'question'
        },
        {
            stem: 'Derp Question 2',
            answers: [
                'Answer 1',
                'Answer 2',
                'Answer 3'
            ],
            correct: 2,
            feedback: 'Derp',
            type: 'question'
        }
    ]
};

const testState1: TutoralStateType = {
    COURSE_DATA: courseData,
    CURRENT_PAGE: 1,
    CURRENT_SCORE: 0
};

const testState2: TutoralStateType = {
    COURSE_DATA: courseData,
    CURRENT_PAGE: 3,
    CURRENT_SCORE: 0
};

const testState3: TutoralStateType = {
    COURSE_DATA: courseData,
    CURRENT_PAGE: 5,
    CURRENT_SCORE: 0
};

test('should get the CURRENT_TOPIC at page 1', (t) => {
    t.is(TutoralStateHelpers(testState1).CURRENT_TOPIC(), 0);
    t.end();
});

test('should get the CURRENT_TOPIC at page 3', (t) => {
    t.is(TutoralStateHelpers(testState2).CURRENT_TOPIC(), 1);
    t.end();
});

test('should get the CURRENT_TOPIC at page 5', (t) => {
    t.is(TutoralStateHelpers(testState3).CURRENT_TOPIC(), -1);
    t.end();
});

test('should GET_TOPIC_TITLE_PAGE at page 1', (t) => {
    t.is(TutoralStateHelpers(testState1).GET_TOPIC_TITLE_PAGE(), 0);
    t.end();
});

test('should GET_TOPIC_TITLE_PAGE at page 3', (t) => {
    t.is(TutoralStateHelpers(testState2).GET_TOPIC_TITLE_PAGE(), 2);
    t.end();
});

test('should GET_TOPIC_TITLE_PAGE at page 5', (t) => {
    t.is(TutoralStateHelpers(testState3).GET_TOPIC_TITLE_PAGE(), -1);
    t.end();
});

test('should GET_ALL_TOPIC_TITLES', (t) => {
    const expectedMap = Immutable.Map([
        [0, 0],
        [1, 2]
    ]);
    t.deepEqual(TutoralStateHelpers(testState1).GET_ALL_TOPIC_TITLES(), expectedMap);
    t.deepEqual(TutoralStateHelpers(testState3).GET_ALL_TOPIC_TITLES(), expectedMap);
    t.end();
});

test('should GET_PAGES', (t) => {
    const expectedList = Immutable.List<AnyPageData>().withMutations(
            (list) => {
                list.push({ type: 'welcome' });
                list.push(...courseData.pages);
                list.push({ type: 'results' });
                list.push({ type: 'talktous' });
            }
        );
    t.deepEqual(TutoralStateHelpers(testState1).GET_PAGES(), expectedList);
    t.deepEqual(TutoralStateHelpers(testState3).GET_PAGES(), expectedList);
    t.end();
});

test('should GET_PAGE_LENGTH', (t) => {
    const expectedLength = courseData.pages.length + 3;
    t.deepEqual(TutoralStateHelpers(testState1).GET_PAGE_LENGTH(), expectedLength);
    t.deepEqual(TutoralStateHelpers(testState3).GET_PAGE_LENGTH(), expectedLength);
    t.end();
});
