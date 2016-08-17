import {Action, ActionCreator} from 'redux';

export const NEXT_PAGE = 'NEXT_PAGE';
export const PREV_PAGE = 'PREV_PAGE';
export const SET_PAGE = 'SET_PAGE';

export interface SetPageAction extends Action {
    new_page: number;
}

export interface PageActionCreator extends ActionCreator<Action> {
    (): Action;
}

export interface SetPageActionCreator extends ActionCreator<SetPageAction> {
    (new_page: number): SetPageAction;
}

export const createNextPageAction: PageActionCreator = function(){
    return {
        type: NEXT_PAGE
    };
};

export const createPrevPageAction: PageActionCreator = function(){
    return {
        type: PREV_PAGE
    };
};

export const createSetPageAction: SetPageActionCreator = function(new_page: number){
    return {
        type: SET_PAGE,
        new_page: new_page
    };
};
