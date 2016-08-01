import React from "react";
import {PageProps} from "./TemplateProps";
import Marked from "marked";

export default function(props: PageProps){
        return (
            <article className="page" dangerouslySetInnerHTML={{ __html: Marked(props.text) }} />
	    );
}