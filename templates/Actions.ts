import {Action, ActionCreator} from 'redux';


const NEXT_PAGE = "NEXT_PAGE";
const PREV_PAGE = "PREV_PAGE";
const SELECT_TOPIC = "SELECT_TOPIC";

interface SelectTopicAction extends Action{
    topic_id: number;
}

interface PageActionCreator extends ActionCreator<Action> {
    (): Action
}

interface SelectTopicActionCreator extends ActionCreator<SelectTopicAction> {
    (topic_id: number): SelectTopicAction
}

const createNextPageAction: PageActionCreator = function(){
    return {
        type: NEXT_PAGE
    }
}

const createPrevPageAction: PageActionCreator = function(){
    return {
        type: PREV_PAGE
    }
}

const createSelectTopicAction: SelectTopicActionCreator = function(topic_id: number){
    return {
        type: SELECT_TOPIC,
        topic_id: topic_id
    }
}

export default {
    NEXT_PAGE,
    PREV_PAGE,
    SELECT_TOPIC,
    createNextPageAction,
    createPrevPageAction,
    createSelectTopicAction
}