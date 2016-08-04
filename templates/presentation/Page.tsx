import React from 'react';
import { PageContainerProps } from './TemplateProps'

export default function(props:PageContainerProps) {
    return (<section className="page_container">{props.children}</section>)
}