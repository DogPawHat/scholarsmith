import React from "react";
import {BasicPageData} from "../types";
import Marked from "marked";

export default function(props: BasicPageData){
        return (
            <article className="page" dangerouslySetInnerHTML={{ __html: Marked(props.text) }} />
	    );
}