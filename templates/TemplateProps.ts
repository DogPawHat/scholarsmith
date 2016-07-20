import React from 'react';

export interface TopicsProps{
    topics: TopicProps[];
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