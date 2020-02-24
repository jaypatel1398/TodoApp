import {actionTypes} from '../constants/actionTypes';

const NotificationReducer = (task = '', action) => {
    switch(action.type){
        case actionTypes.SHOW_TODO_ADDED_MESSAGE:
            return action.payload.task;
        default:
            return task;
    }
}

export default NotificationReducer;