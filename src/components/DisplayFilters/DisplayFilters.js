import "./displayFilters.css";
import React, { useCallback } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import displayFilterTypes from '../../constants/displayFilterTypes';
import {setCurrentFilter} from '../../actions/actionCreators';

const DisplayFilters = ({currentFilter, setCurrentFilter}) => {

  return (
    <div className="filters">
      {_.map(displayFilterTypes, (filterType, index) => (
        <button
          className={currentFilter === filterType ? "filterButton selected" : "filterButton"}
          key={index}
          onClick={setCurrentFilter.bind(this, filterType)} >
          {filterType.toLowerCase()}
        </button>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentFilter: state.currentFilter
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentFilter: (filterType) => dispatch(setCurrentFilter(filterType))
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayFilters);