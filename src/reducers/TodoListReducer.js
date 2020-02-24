import _ from 'lodash';
import {actionTypes} from '../constants/actionTypes';

const initialState = {
	byId: {},
	allIds: [],
	activeIds: [],
	completedIds: []
}
const todoListReducer = (state = initialState, action) => {
	switch (action.type) {
		case (actionTypes.ADD_TODO):
			const currentId = state.allIds.length===0 ? 1 : state.allIds[state.allIds.length-1] + 1;
			return ({
				...state,
				byId: {
					...state.byId,
					[currentId] : {
						task: action.payload.task,
						id: currentId,
						completed: false
					}
				},
				allIds: [
					...state.allIds,
					currentId
				],
				activeIds: [
					...state.activeIds,
					currentId
				]
			})
		case (actionTypes.TOGGLE_TODO):
			const todo = state.byId[action.payload.id];
			const todoIsActive = !todo.completed;
			let tempActiveIds = [...state.activeIds];
			let tempCompletedIds = [...state.completedIds];
			const tempById = {...state.byId};
			if(todoIsActive){
				const activeIndex = _.indexOf(tempActiveIds, action.payload.id);
				tempActiveIds.splice(activeIndex, 1);
				tempCompletedIds = [...tempCompletedIds, todo.id];
				tempById[todo.id].completed = !todo.completed;
				return({
					byId: tempById,
					allIds: state.allIds,
					completedIds: tempCompletedIds,
					activeIds: tempActiveIds
				});
			}
			else{
				const completedIndex = _.indexOf(tempCompletedIds, action.payload.id);
				tempCompletedIds.splice(completedIndex, 1);
				tempActiveIds = [...tempActiveIds, todo.id];
				tempById[todo.id].completed = !todo.completed;
				return({
					byId: tempById,
					allIds: state.allIds,
					completedIds: tempCompletedIds,
					activeIds: tempActiveIds
				});
			}
		case (actionTypes.CLEAR_COMPLETED):
			let temprById = {...state.byId};
			let temprAllIds = [...state.allIds];
			_.forEach(state.completedIds, (id)=> {
				delete temprById[id];
				const index = _.indexOf(temprAllIds, id);
				temprAllIds.splice(index, 1);
			})
			return({
				allIds: temprAllIds,
				activeIds: state.activeIds,
				byId: temprById,
				completedIds: []
			});
		default:
			return state;
	}
}

export default todoListReducer;