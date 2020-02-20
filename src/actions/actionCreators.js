import {actionTypes} from '../constants/actionTypes';
export const addTodo = task => ({
  type: actionTypes.ADD_TODO,
  payload: {
    task,
  }
});

export const toggleTodo = id => ({
  type: actionTypes.TOGGLE_TODO,
  payload: {
    id,
  }
});

export const setCurrentFilter = filter => ({
  type: actionTypes.SET_DISPLAY_FILTER,
  payload: {
    currentFilter: filter
  }
});

export const clearCompleted = () => ({
  type: actionTypes.CLEAR_COMPLETED
});

export const setTodoAddedMessage = task => ({
  type: actionTypes.SHOW_TODO_ADDED_MESSAGE,
  payload: {
    task,
  }
});