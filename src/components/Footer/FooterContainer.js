import React from 'react';
import {connect} from 'react-redux';
import {clearCompleted} from '../../actions/actionCreators';
import filterTypes from '../../constants/filterTypes';
import Footer from './Footer';

const FooterContainer = ({todoList, currentFilter, clearCompleted}) => {
    let taskCount = todoList.allIds.length;
    if(currentFilter.key===filterTypes.COMPLETED.key)
        taskCount = todoList.completedIds.length;
    if(currentFilter.key===filterTypes.ACTIVE.key)
        taskCount = todoList.activeIds.length;
    let showClearCompletedButton = (taskCount === 0) || (currentFilter.key === filterTypes.ACTIVE.key);
    return <Footer 
        taskCount={taskCount} 
        onClick={clearCompleted} 
        currentFilter={currentFilter}
        showClearCompletedButton={showClearCompletedButton}/>
};

const mapStateToProps = (state) => ({
    todoList: state.todoList,
    currentFilter: state.currentFilter
});

const mapDispatchToProps = (dispatch) => ({
    clearCompleted: () => dispatch(clearCompleted())
});

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);