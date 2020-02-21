import filterTypes from '../constants/filterTypes';
import {actionTypes} from '../constants/actionTypes';
const displayFilterReducer = (currentFilter = filterTypes.ALL, action) => {
    switch(action.type){
      case actionTypes.SET_DISPLAY_FILTER:
        return(action.payload.currentFilter);
      default:
        return currentFilter;
    }
}

export default displayFilterReducer;