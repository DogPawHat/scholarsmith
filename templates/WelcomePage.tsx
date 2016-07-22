import React from 'react';
import AbstractPage from "./AbstractPage";
import {WelcomePageProps} from "./TemplateProps"


export default class extends AbstractPage<WelcomePageProps>{
    render(){
        return(
            <h1 className="page current">WELCOME</h1>
        );
    }
}