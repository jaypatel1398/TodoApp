import {ACTION_TYPES} from '../constants/actionTypes';
export const getAddTodoAction = task => ({
  type: ACTION_TYPES.ADD_TODO,
  payload: {
    task,
  }
});

export const getToggleTodoAction = id => ({
  type: ACTION_TYPES.TOGGLE_TODO,
  payload: {
    id,
  }
});

export const getSetFilterAction = filter => ({
  type: ACTION_TYPES.SET_FILTER,
  payload: {
    currentFilter: filter
  }
});

export const getClearCompletedAction = () => ({
  type: ACTION_TYPES.CLEAR_COMPLETED
});

export const getRemoveTodoAction = (id) => ({
  type: ACTION_TYPES.REMOVE_TODO,
  payload: {
    id
  }
});

export const getSetNotificationAction = task => ({
  type: ACTION_TYPES.SHOW_NOTIFICATION,
  payload: {
    task,
  }
});