import React from "react";
import AbstractPage from "./AbstractPage"
import {TalkToUsPageProps} from "./TemplateProps"

export default class extends AbstractPage<TalkToUsPageProps>{
    render(){
        return(
            <div className="page talk_to_us"><p>Please Talk to us</p></div>
        );
    }
}