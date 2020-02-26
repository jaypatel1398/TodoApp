import FILTER_TYPES from '../constants/filterTypes';
import {ACTION_TYPES} from '../constants/actionTypes';
const displayFilterReducer = (currentFilter = FILTER_TYPES.ALL, action) => {
    switch(action.type){
      case ACTION_TYPES.SET_FILTER:
        return(action.payload.currentFilter);
      default:
        return currentFilter;
    }
}

export default displayFilterReducer;