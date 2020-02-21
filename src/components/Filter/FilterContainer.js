import { connect } from 'react-redux';
import Filter from './Filter';
import { setCurrentFilter } from '../../actions/actionCreators';
import filterTypes from '../../constants/filterTypes';
import _ from 'lodash';
import React from 'react';

const FilterContainer = ({currentFilter, setCurrentFilter}) => (
    <div>
        {_.map(filterTypes, (filter)=>(
                <Filter 
                    filter={filter}
                    setCurrentFilter={setCurrentFilter} 
                    selected={currentFilter.key===filter.key}
                />
            )
        )}
    </div>
);


const mapStateToProps = (state) => ({
    currentFilter: state.currentFilter
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentFilter: (filterType) => dispatch(setCurrentFilter(filterType))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);