import _ from 'lodash';
import filterTypes from '../constants/filterTypes';

export const filterTodos = (filterValue, todoList) => {
  if (filterValue !== filterTypes.ALL.key) {
    const tempList = _.filter(todoList, todo => {
      return filterValue === filterTypes.COMPLETED.key ? todo.completed : !todo.completed; // think of better solution
    });
    return tempList;
  }
  return todoList;
}

export const calculateFilteredTodos = (currentFilter, todoList) => {
  return(filterTodos(currentFilter.key, todoList).length);
}