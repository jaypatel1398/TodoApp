import {ACTION_TYPES} from '../constants/actionTypes';

const NotificationReducer = (task = '', action) => {
    switch(action.type){
        case ACTION_TYPES.SHOW_NOTIFICATION:
            return action.payload.task;
        default:
            return task;
    }
}

export default NotificationReducer;