import displayFilterReducer from './displayFilterReducer';
import listofTasksReducer from './listofTasksReducer';
import todoAddedMessageReducer from './todoAddedMessageReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    currentFilter: displayFilterReducer,
    listofTasks: listofTasksReducer,
    task: todoAddedMessageReducer
});
