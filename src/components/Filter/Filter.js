import "./Filter.css";
import React from 'react';
import _ from 'lodash';

const Filter = (props) => {
  return (
    <button
      className={`filterButton ${props.selected ? 'selected' : ''}`}
      onClick={_.partial(props.setCurrentFilter,props.filter)}>
      {props.filter.label}
    </button>
  );
}

export default Filter;