import { connect } from 'react-redux';
import Filter from './Filter';
import { getSetFilterAction } from '../../actions/actionCreators';
//capital
import FILTER_TYPES from '../../constants/filterTypes';
import _ from 'lodash';
import React from 'react';

const FilterContainer = ({currentFilter, setFilter}) => (
    <div>
        {_.map(FILTER_TYPES, (filter)=>(
                <Filter 
                    key={filter.key}
                    filter={filter}
                    setFilter={setFilter} 
                    selected={currentFilter.key===filter.key}
                />
            )
        )}
    </div>
);


const mapStateToProps = (state) => ({
    currentFilter: state.currentFilter
});

export default connect(mapStateToProps, {setFilter: getSetFilterAction})(FilterContainer);