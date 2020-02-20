import _ from 'lodash';
import displayFilterTypes from '../constants/displayFilterTypes';
const calculateFilteredTodos = (todoList, currentFilter) => {
    if(currentFilter.key === displayFilterTypes.ALL.key)
        return todoList.length;
    let activeTasks = _.reduce(todoList, (num, todo) => {
        if(!todo.completed)
            return num+1;
        return num;
    }, 0);
    if(currentFilter.key === displayFilterTypes.ACTIVE.key)
        return activeTasks;
    return (todoList.length-activeTasks);
}

export default calculateFilteredTodos;