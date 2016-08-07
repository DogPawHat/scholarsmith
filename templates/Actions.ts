import {Action, ActionCreator} from 'redux';

const NEXT_PAGE = "NEXT_PAGE";
const PREV_PAGE = "PREV_PAGE";
const SET_PAGE = "SET_PAGE";

interface SetPageAction extends Action{
    new_page: number;
}

interface PageActionCreator extends ActionCreator<Action> {
    (): Action
}

interface SetPageActionCreator extends ActionCreator<SetPageAction> {
    (new_page: number): SetPageAction
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

const createSetPageAction: SetPageActionCreator = function(new_page: number){
    return {
        type: SET_PAGE,
        new_page: new_page
    }
}

export {
    NEXT_PAGE,
    PREV_PAGE,
    SET_PAGE,
    PageActionCreator,
    SetPageAction,
    SetPageActionCreator,
    createNextPageAction,
    createPrevPageAction,
    createSetPageAction
};