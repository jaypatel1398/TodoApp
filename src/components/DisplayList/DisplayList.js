import React from 'react';
import filterTodos from '../../helpers/filterTodos';
import _ from 'lodash';
import { connect } from 'react-redux';
import {toggleTodo, clearCompleted} from '../../actions/actionCreators';
import "./displayList.css";

const DisplayList = ({ listofTasks, currentFilter, toggleTodo, clearCompleted }) => {
  let myList = listofTasks;
  myList = filterTodos(currentFilter.key, listofTasks);
  return(
    <div>
      <div className="scrollArea" id="scrollArea">
        {
          _.map(myList,
            (item) => (
              <div className="displayList" key={item.id} onClick={_.partial(toggleTodo,item.id)}>
                <input
                  type="checkbox"
                  id="myCheck"
                  className="todoItems"
                  checked={item.completed}
                />
                {item.task}
              </div>
            )
          )
        }
      </div>
      <div className="footer">
        <span className="countDisplay">
          {currentFilter.label} tasks: {myList.length}
        </span>
        <button 
          className={ ((myList.length === 0) || (currentFilter.key==='ACTIVE')) ? "hide" : "clearCompletedButton" } 
          onClick={clearCompleted}>
          Clear Completed
        </button>
      </div>
    </div>
  );

}

const mapStateToProps = (state) => ({
  listofTasks: state.listofTasks,
  currentFilter: state.currentFilter
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  clearCompleted: () => dispatch(clearCompleted())
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayList);