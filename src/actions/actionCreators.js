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
export const setDisplayFilter = (filter) => ({
  type: 'SET_DISPLAY_FILTER',
  payload: {
    displayFilter: filter
  }
});