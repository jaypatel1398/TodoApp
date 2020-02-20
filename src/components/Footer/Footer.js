import React from 'react';
import {connect} from 'react-redux';
import {clearCompleted} from '../../actions/actionCreators';
import calculateFilteredTodos from '../../helpers/calculateFilteredTodos';
import displayFilterTypes from '../../constants/displayFilterTypes';
import "./Footer.css";

const Footer = ({listofTasks, currentFilter, clearCompleted}) => {
    let taskCount = calculateFilteredTodos(listofTasks, currentFilter);
    return(
        <div className="footer">
        <span className="countDisplay">
            {currentFilter.label} tasks: {taskCount}
        </span>
        <button 
            className={ ((taskCount === 0) || (currentFilter.key === displayFilterTypes.ACTIVE.key)) ? "hide" : "clearCompletedButton" } 
            onClick={clearCompleted}>
            Clear Completed
        </button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    listofTasks: state.listofTasks,
    currentFilter: state.currentFilter
});

const mapDispatchToProps = (dispatch) => ({
    clearCompleted: () => dispatch(clearCompleted())
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);