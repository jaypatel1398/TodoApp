import FilterReducer from './FilterReducer';
import TodoListReducer from './TodoListReducer';
import NotificationReducer from './NotificationReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    currentFilter: FilterReducer,
    todoList: TodoListReducer,
    task: NotificationReducer
});
