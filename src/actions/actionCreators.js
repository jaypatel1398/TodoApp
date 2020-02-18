export const addTodo = (task) => ({
  type: 'ADD_TODO',
  payload: {
    task: task
  }
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  payload: {
    id: id
  }
});

export const setCurrentFilter = (filter) => ({
  type: 'SET_DISPLAY_FILTER',
  payload: {
    currentFilter: filter
  }
});

export const clearCompleted = (id) => ({
  type: 'CLEAR_COMPLETED'
});