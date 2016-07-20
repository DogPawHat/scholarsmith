import React from "react";

interface TopicProps {
    title: string;
    pages: PageProps[];
}

interface PageProps{
    text: string;
}

function Page(props: PageProps): React.ReactElement<PageProps>{
    return(
        <article class="page">
        { props.text }
        </article>
    );
}

export default function (props: TopicProps) {
    let pageElements = props.pages.map((page, i) => {
                return <Page text={page.text} key={i} />;
            })
    return (
        <article className="topic">
            <h2 className="page">{ props.title }</h2>
            {pageElements} 
        </article>
    )
}