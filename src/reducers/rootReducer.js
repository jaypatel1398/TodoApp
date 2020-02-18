import displayFilterReducer from './displayFilterReducer';
import listofTasksReducer from './listofTasksReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    currentFilter: displayFilterReducer,
    listofTasks: listofTasksReducer
});