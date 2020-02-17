import displayFilterReducer from './displayFilterReducer';
import listofTasksReducer from './listofTasksReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    displayFilter: displayFilterReducer,
    listofTasks: listofTasksReducer
});