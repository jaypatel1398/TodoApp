import _ from 'lodash';

const filterList = (filterValue, todoList) => {
  if (filterValue !== 'ALL') {
    const filterSelector = (filterValue === 'COMPLETED');
    const tempList = _.filter(todoList, item => {
      return (filterSelector ? item.done : !item.done);
    });
    return tempList;
  }
  return todoList;
}

export default filterList;