import "./displayFilters.css";
import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import displayFilterTypes from '../../constants/displayFilterTypes';
import {setCurrentFilter} from '../../actions/actionCreators';

const DisplayFilters = ({currentFilter, setCurrentFilter}) => {
  return (
    <div className="filters">
      {_.map(displayFilterTypes, (filterType, index) => (
        <button
          className={currentFilter.key === filterType.key ? "filterButton selected" : "filterButton"}
          key={index}
          onClick={_.partial(setCurrentFilter,filterType)}>
          {filterType.label}
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