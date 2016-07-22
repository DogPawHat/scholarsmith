import React from "react";
import {PageProps} from "./TemplateProps";
import AbstractPage from "./AbstractPage";
import Marked from "marked";

export default class extends AbstractPage<PageProps> {
    render(){
        return (
            <article className="page" dangerouslySetInnerHTML={Marked(this.props.text) } />
	    );
    }
}