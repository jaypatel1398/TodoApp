const displayFilterReducer = (displayFilter = 'ALL', action) => {
    switch(action.type){
      case 'SET_DISPLAY_FILTER':
        return(action.payload.displayFilter);
      default:
        return displayFilter;
    }
}
export default displayFilterReducer;