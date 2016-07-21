import React from 'react';

interface TopicState{
    current: boolean;
}

abstract class AbstractPage<P> extends React.Component<P, TopicState>{
    constructor(props: P){
        super(props);
        this.state.current = false;
    };

    shouldComponentUpdate = true;
    getPageClassName(baseClassName: string){
        return this.state.current
	        ? baseClassName + "page current" 
	        : baseClassName + "page";
    }
    
}

export default AbstractPage;