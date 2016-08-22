import React from 'react';

const Answer = (props: {
    value: string;
    index: number;
}) => {
    return(
        <input type='radio' name='radio' key='{props.index}' value='{props.index}'>{ props.value }</input>
    );
};

export default Answer;
