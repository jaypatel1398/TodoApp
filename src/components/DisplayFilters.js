import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import displayFilterTypes from '../constants/displayFilterTypes';
const DisplayFilters = ({displayFilter, setDisplayFilter}) => {
  return (
    <div className="statusButtons">
      {_.map(displayFilterTypes, (filterType, index) => (
        <button
          className={displayFilter === filterType ? "selected" : ""}
          key={index}
          onClick={() => setDisplayFilter(filterType)} >
          {filterType}
        </button>
      ))}
    </div>
  );
}
const mapStateToProps = (state) => ({
  displayFilter: state.displayFilter
});
const mapDispatchToProps = (dispatch) => ({
  setDisplayFilter: filter => dispatch({
    type: 'SET_DISPLAY_FILTER',
    payload: {
      displayFilter: filter
    }
  })
});
export default connect(mapStateToProps, mapDispatchToProps)(DisplayFilters);