const displayFilterReducer = (currentFilter = 'ALL', action) => {
    switch(action.type){
      case 'SET_DISPLAY_FILTER':
        return(action.payload.currentFilter);
      default:
        return currentFilter;
    }
}

export default displayFilterReducer;