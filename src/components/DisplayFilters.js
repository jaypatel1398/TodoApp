import React from 'react';
import _ from 'lodash';
const DisplayFilters = (props) => {
  //todo: from props
  //todo: use one onChange
  //todo: defaultState, focus style on select underline and bold
  //make it a list of buttons
  return (
    <div className="statusButtons">
      {_.map(props.displayFilterTypes, (filterType, index) => (
        <button
          className={props.displayFilter === filterType ? "selected" : ""}
          key={index}
          onClick={() => props.setDisplayFilter(filterType)} >
          {filterType}
        </button>
      ))}
    </div>
  );
}
export default DisplayFilters;