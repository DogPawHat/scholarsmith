import React from 'react';

export default function(props: {
    children: React.ReactNode;
}) {
    return (<section className="page_container">{props.children}</section>)
}