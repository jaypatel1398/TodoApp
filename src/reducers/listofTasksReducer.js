import _ from 'lodash';

const listofTasksReducer = (listofTasks = [], action) => {

	switch (action.type) {
		case ('ADD_TODO'):
			return ([
				...listofTasks,
				{
					task: action.payload.task,
					id: listofTasks.length + 1,
					done: false
				}
			])
		case ('TOGGLE_TODO'):
			return (_.map(listofTasks,
				(todo) => {
					if (todo.id === action.payload.id) {
						return ({
							task: todo.task,
							id: todo.id,
							done: !todo.done
						});
					}
					return todo;
				}))
		case ('CLEAR_COMPLETED'):
			return (_.filter(listofTasks,
				(todo) => {
					return(todo.done ? false : true);
				})
			)
		default:
			return listofTasks;
	}
}

export default listofTasksReducer;