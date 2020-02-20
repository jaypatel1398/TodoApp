import _ from 'lodash';
import displayFilterTypes from '../constants/displayFilterTypes';

const filterTodos = (filterValue, todoList) => {
  if (filterValue !== displayFilterTypes.ALL.key) {
    const tempList = _.filter(todoList, todo => {
      return filterValue === displayFilterTypes.COMPLETED.key ? todo.completed : !todo.completed; // think of better solution
    });
    return tempList;
  }
  return todoList;
}

export default filterTodos;