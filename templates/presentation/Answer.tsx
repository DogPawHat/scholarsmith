import React from 'react'
import {AnswerProps} from '../types'

export default function(props: AnswerProps){
    return(
        <input type="radio" name="radio" value="{props.key}">{ props.value }</input>
    );
}