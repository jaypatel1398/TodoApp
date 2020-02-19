import {actionTypes} from '../constants/actionTypes';

const todoAddedMessageReducer = (prevState = {todoAdded: false, task: ''}, action) => {
    switch(action.type){
        case actionTypes.SET_TODO_ADDED_MESSAGE:
            console.log("In the reducer with "+action.payload.todoAdded+" "+action.payload.task);
            return action.payload;
        default:
            return prevState;
    }
}

export default todoAddedMessageReducer;