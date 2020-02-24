import _ from 'lodash';
import {actionTypes} from '../constants/actionTypes';
import update from 'immutability-helper';

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
				allIds: {
					$push: [currentId]
				},
				activeIds: {
					$push: [currentId]
				}
			})
		case (actionTypes.TOGGLE_TODO):
			const todoIsActive = !state.byId[action.payload.id].completed;
			if(todoIsActive){
				const activeIndex = _.indexOf(state.activeIds, action.payload.id);
				return update(state, {
					byId: {
						[action.payload.id]:{
							completed:{
								$set: true
							}
						}
					},
					completedIds: {
						$push: [action.payload.id]
					},
					activeIds: {
						$splice: [[activeIndex,1]]
					}
				});
			}
			else{
				const completedIndex = _.indexOf(state.completedIds, action.payload.id);
				return update(state, {
					byId: {
						[action.payload.id]:{
							completed:{
								$set: false
							}
						}
					},
					activeIds: {
						$push: [action.payload.id]
					},
					completedIds: {
						$splice: [[completedIndex, 1]]
					}
				});
			}
		case (actionTypes.CLEAR_COMPLETED):
			var tempAllIds = _.filter(state.allIds, (id) => {
				if(state.byId[id].completed)
					return false;
				return true;
			})
			return update(state, {
				byId: {
					$unset: state.completedIds
				},
				allIds: {
					$set: tempAllIds
				},
				completedIds: {
					$splice: [[0, state.completedIds.length]]
				}
			});
		case (actionTypes.REMOVE_TODO):
			const todoIsCompleted = state.byId[action.payload.id].completed;
			const indexAllId = _.indexOf(state.allIds, action.payload.id);
			if(todoIsCompleted){
				const indexCompleted = _.indexOf(state.completedIds, action.payload.id);
				return update(state, {
					byId: {
						$unset: action.payload.id
					},
					allIds: {
						$splice: [[indexAllId, 1]]
					},
					completedIds: {
						$splice: [[indexCompleted, 1]]
					}
				});
			}
			else{
				const indexActive = _.indexOf(state.activeIds, action.payload.id);
				return update(state, {
					byId: {
						$unset: [action.payload.id]
					},
					allIds: {
						$splice: [[indexAllId, 1]]
					},
					activeIds: {
						$splice: [[indexActive, 1]]
					}
				});
			}
		default:
			return state;
	}
}

export default todoListReducer;