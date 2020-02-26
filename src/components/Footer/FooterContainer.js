import React from 'react';
import {connect} from 'react-redux';
import {getClearCompletedAction} from '../../actions/actionCreators';
import FILTER_TYPES from '../../constants/filterTypes';
import Footer from './Footer';

const FooterContainer = ({todoList, currentFilter, clearCompleted}) => {
    let taskCount = todoList[currentFilter.key].length;

    const disableClearCompleted = (taskCount === 0) || (currentFilter.key === FILTER_TYPES.ACTIVE.key) || (todoList.COMPLETED.length === 0);
    
    return <Footer 
        taskCount={taskCount} 
        onClick={clearCompleted} 
        currentFilter={currentFilter}
        disableClearCompleted={disableClearCompleted}/>
};

const mapStateToProps = (state) => ({
    todoList: state.todoList,
    currentFilter: state.currentFilter
});

export default connect(mapStateToProps, {clearCompleted: getClearCompletedAction})(FooterContainer);