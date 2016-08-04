import React from 'react';

export interface TutorialTestProps extends React.Attributes{
    questions: QuestionProps[];
}

export interface QuestionProps extends React.Attributes{
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

export interface PageContainerProps extends React.Attributes{
    children: React.ReactChildren;
}

export interface TopicProps extends React.Attributes{
    title: string;
    pages: PageProps[];
}

export interface BodyProps extends React.Attributes{
    title: string;
    topics: TopicsProps;
}

export interface AbstractPageProps extends React.Attributes{
    initialState?: boolean;
}

export interface WelcomePageProps extends AbstractPageProps{

}

export interface PageProps extends AbstractPageProps{
    text: string;
}

export interface TalkToUsPageProps extends AbstractPageProps{

}

export interface TopicTitlePageProps extends AbstractPageProps{
    title: string;
}

export interface ResultsPageProps extends AbstractPageProps{
    
}