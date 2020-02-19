import _ from 'lodash';
import {actionTypes} from '../constants/actionTypes';

const listofTasksReducer = (listofTasks = [], action) => {

	switch (action.type) {
		case (actionTypes.ADD_TODO):
			return ([
				...listofTasks,
				{
					task: action.payload.task,
					id: listofTasks.length + 1,
					completed: false
				}
			])
		case (actionTypes.TOGGLE_TODO):
			return (_.map(listofTasks,
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
			return (_.filter(listofTasks,
				(todo) => {
					return !todo.completed;
				})
			)
		default:
			return listofTasks;
	}
}

export default listofTasksReducer;