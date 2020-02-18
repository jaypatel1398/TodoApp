import React from 'react';
import filterList from '../../helpers/filterList';
import _ from 'lodash';
import { connect } from 'react-redux';
import {toggleTodo, clearCompleted} from '../../actions/actionCreators';
import "./displayList.css";

const DisplayList = ({ listofTasks, currentFilter, toggleTodo, clearCompleted }) => {
  let myList = listofTasks;
  myList = filterList(currentFilter, listofTasks);

  return(
    <div>
      <span 
        style={{fontSize: "2vh", fontFamily: "sans-serif"}}>
        {currentFilter} tasks: {myList.length}
      </span>
      <button 
        className={ (myList.length === 0) || (currentFilter==='ACTIVE') ? "hide" : "clearCompletedButton" } 
        onClick={clearCompleted}>
        Clear Completed
      </button>
      {
        _.map(myList,
          (item, index) => (
            <div className="displayList" key={item.id}>
              <input
                type="checkbox"
                id="myCheck"
                className="todoItems"
                onChange={toggleTodo.bind(this,item.id)}
                checked={myList[index].done}
              />
              {item.task}
            </div>
          )
        )
      }
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