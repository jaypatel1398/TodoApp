import displayFilterTypes from '../constants/displayFilterTypes';
import {actionTypes} from '../constants/actionTypes';
const displayFilterReducer = (currentFilter = displayFilterTypes.ALL, action) => {
    switch(action.type){
      case actionTypes.SET_DISPLAY_FILTER:
        return(action.payload.currentFilter);
      default:
        return currentFilter;
    }
}

export default displayFilterReducer;