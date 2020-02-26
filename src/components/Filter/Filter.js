import "./Filter.css";
import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';

const Filter = (props) => {
  return (
    <button
      className={classNames('filterButton', { 'selected': props.selected })}
      onClick={_.partial(props.setFilter,props.filter)}
    >
      {props.filter.label}
    </button>
  );
}

export default Filter;