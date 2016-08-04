import React from 'react';

export default function(props: {
    children: React.ReactChildren;
}) {
    return (<section className="page_container">{props.children}</section>)
}