import _ from 'lodash';
import {ACTION_TYPES} from '../constants/actionTypes';
import update from 'immutability-helper';

const initialState = {
	byId: {},
	ALL: [],
	ACTIVE: [],
	COMPLETED: []
}
const todoListReducer = (state = initialState, action) => {
	switch (action.type) {
		case (ACTION_TYPES.ADD_TODO):
			const currentId = state.ALL.length===0 ? 1 : state.ALL[state.ALL.length-1] + 1;
			return update(state, {
				byId: {
					$merge: {
						[currentId] : {
							task: action.payload.task,
							id: currentId,
							completed: false
						}
					}
				},
				ALL: { $push: [currentId] },
				ACTIVE: { $push: [currentId] }
			})
		case (ACTION_TYPES.TOGGLE_TODO):
			const isTodoActive = !state.byId[action.payload.id].completed;
			const byIdUpdatedState = update(state, {
				byId: {
					[action.payload.id]:{
						completed:{
							$set: !state.byId[action.payload.id].completed
						}
					}
				},
			})
			if(isTodoActive){
				const activeIndex = _.indexOf(state.ACTIVE, action.payload.id);
				return update(byIdUpdatedState, {
					COMPLETED: { $push: [action.payload.id] },
					ACTIVE: { $splice: [[activeIndex,1]] }
				});
			}
			else{
				const completedIndex = _.indexOf(state.COMPLETED, action.payload.id);
				return update(byIdUpdatedState, {
					ACTIVE: { $push: [action.payload.id] },
					COMPLETED: { $splice: [[completedIndex, 1]] }
				});
			}

		case (ACTION_TYPES.CLEAR_COMPLETED):
			const filteredIds = _.filter(state.ALL, (id) => !state.byId[id].completed);

			return update(state, {
				byId: { $unset: state.COMPLETED },
				ALL: { $set: filteredIds },
				COMPLETED: { $splice: [[0, state.COMPLETED.length]] }
			});

		case (ACTION_TYPES.REMOVE_TODO):
			const isTodoCompleted = state.byId[action.payload.id].completed;
			const indexAllId = _.indexOf(state.ALL, action.payload.id);
			const updatedState = update(state, {
				byId: { $unset: [action.payload.id] }
			})
			if(isTodoCompleted){
				const indexCompleted = _.indexOf(state.COMPLETED, action.payload.id);
				return update(updatedState, {
					ALL: { $splice: [[indexAllId, 1]] },
					COMPLETED: { $splice: [[indexCompleted, 1]] }
				});
			}
			else{
				const indexActive = _.indexOf(state.ACTIVE, action.payload.id);
				return update(updatedState, {
					ALL: { $splice: [[indexAllId, 1]] },
					ACTIVE: { $splice: [[indexActive, 1]] }
				});
			}
		default:
			return state;
	}
}

export default todoListReducer;