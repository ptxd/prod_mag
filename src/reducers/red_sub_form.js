import {SUB_FORM} from '../actions/ac_subform';

export default function (state=[],action){
    switch(action.type){
        case SUB_FORM:
        return [action.payload,...state]; 
    }
    return state;
}