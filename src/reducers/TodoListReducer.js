import _ from 'lodash';
import {actionTypes} from '../constants/actionTypes';

const todoListReducer = (todoList = [], action) => {

	switch (action.type) {
		case (actionTypes.ADD_TODO):
			return ([
				...todoList,
				{
					task: action.payload.task,
					id: todoList[todoList.length-1] ? todoList[todoList.length-1].id + 1 : 1,
					completed: false
				}
			])
		case (actionTypes.TOGGLE_TODO):
			return (_.map(todoList,
				(todo) => {
					if (todo.id === action.payload.id) {
						return ({
							task: todo.task,
							id: todo.id,
							completed: !todo.completed
						});
					}
					return todo;
				}))
		case (actionTypes.CLEAR_COMPLETED):
			return (_.filter(todoList,
				(todo) => {
					return !todo.completed;
				})
			)
		default:
			return todoList;
	}
}

export default todoListReducer;