import React from 'react';

export interface TutorialTestProps {
    questions: QuestionProps[];
}

export interface QuestionProps{
    key: React.Key;
    stem: string;
    answers: string[];
    feedback: string;
}

export interface AnswerProps{
    key: React.Key;
    value: string;
}

export interface TopicsProps{
    topics: TopicProps[];
    questions: QuestionProps[];
}

export interface PageSelectProps{
    topics: TopicProps[];
}

export interface TopicProps{
    title: string;
    pages: PageProps[];
}

export interface PageProps{
    text: string;
}

export interface BodyProps extends React.Attributes{
    title: string;
    children: React.ReactChildren;
}