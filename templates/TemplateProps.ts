import React from 'react';

export interface TutorialTestProps extends React.Attributes{
    questions: QuestionProps[];
}

export interface QuestionProps extends React.Attributes{
    key: React.Key;
    stem: string;
    answers: string[];
    feedback: string;
}

export interface AnswerProps extends React.Attributes{
    key: React.Key;
    value: string;
}

export interface TopicsProps extends React.Attributes{
    topics: TopicProps[];
    questions: QuestionProps[];
}

export interface PageSelectProps extends React.Attributes{
    topics: TopicProps[];
}

export interface TopicProps extends React.Attributes{
    title: string;
    pages: PageProps[];
}

export interface PageProps extends React.Attributes{
    text: string;
}

export interface BodyProps extends React.Attributes{
    title: string;
    topics: TopicsProps;
}