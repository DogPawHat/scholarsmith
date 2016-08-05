import React from "react";
import {BasicPageData} from "../types";
import Marked from "marked";

const BasicPage: React.StatelessComponent<BasicPageData> = function(props: BasicPageData){
        return (
            <article className="page" dangerouslySetInnerHTML={{ __html: Marked(props.__content) }} />
	    );
}

export default BasicPage;