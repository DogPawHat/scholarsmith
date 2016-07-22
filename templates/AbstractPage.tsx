import React from 'react';
import {AbstractPageProps} from './TemplateProps.ts'

interface AbstractPageState{
    current: boolean;
}

abstract class AbstractPage<P extends AbstractPageProps> extends React.Component<P, AbstractPageState>{
    constructor(props: P){
        super(props);
        this.state.current = props.initialState;
    };
    getDefaultProps(){
        return{
            initialState: false
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