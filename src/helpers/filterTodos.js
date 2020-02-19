import _ from 'lodash';

const filterTodos = (filterValue, todoList) => {
  if (filterValue !== 'ALL') {
    const tempList = _.filter(todoList, todo => {
      return filterValue === 'COMPLETED' ? todo.completed : !todo.completed; // think of better solution
    });
    return tempList;
  }
  return todoList;
}

export default filterTodos;