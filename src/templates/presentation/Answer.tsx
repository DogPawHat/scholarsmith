import React from 'react';

export default function(props: {
    value: string;
    index: number;
}) {
    return(
        <input type='radio' name='radio' key='{props.index}' value='{props.index}'>{ props.value }</input>
    );
}
