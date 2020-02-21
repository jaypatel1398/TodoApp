import {actionTypes} from '../constants/actionTypes';

const NotificationReducer = (task = '', action) => {
    switch(action.type){
        case actionTypes.SHOW_TODO_ADDED_MESSAGE:
            console.log("in the todo added reducer");
            console.log(action.payload.task);
            return action.payload.task;
        default:
            return task;
    }
}

export default NotificationReducer;