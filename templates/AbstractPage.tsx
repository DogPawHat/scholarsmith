import React from 'react';
import {AbstractPageProps} from './TemplateProps'

interface AbstractPageState{
    current: boolean;
}

abstract class AbstractPage<P extends AbstractPageProps> extends React.Component<P, AbstractPageState>{
    constructor(props: P){
        super(props);
        
        this.state={
            current: typeof props.initialState !== 'undefined' 
            ? props.initialState
            : false
        }
    }
    shouldComponentUpdate = true;
    getPageClassName(baseClassName: string){
        return this.state.current
	        ? baseClassName + "page current" 
	        : baseClassName + "page";
    }
    
}

export default AbstractPage;