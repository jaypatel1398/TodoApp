import React from 'react';
import _ from 'lodash';
export default function DisplayFilters(props) {
  //todo: from props
  //todo: use one onChange
  //todo: defaultState, focus style on select underline and bold
  //make it a list of buttons
    return (
      <div className="statusButtons">
        {_.map(props.filterList,(filterType,index) => (
          <button 
            className={props.currentFilter===filterType ? "selected":""} 
            key={index} 
            onClick={() => props.onDisplayFilterChange(filterType)} >
              {filterType}
            </button>
        ))}
      </div>
    );
}