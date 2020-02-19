import React, { useEffect } from 'react';
import filterList from '../../helpers/filterList';
import _ from 'lodash';
import { connect } from 'react-redux';
import {toggleTodo, clearCompleted} from '../../actions/actionCreators';
import "./displayList.css";

const DisplayList = ({ listofTasks, currentFilter, toggleTodo, clearCompleted }) => {
  let myList = listofTasks;
  myList = filterList(currentFilter, listofTasks);
  useEffect(()=>{
      var objDiv = document.getElementById("scrollArea");
      objDiv.scrollTop = objDiv.scrollHeight;
  });
  return(
    <div>
      <div className="scrollArea" id="scrollArea">
        {
          _.map(myList,
            (item, index) => (
              <div className="displayList" key={item.id} onClick={toggleTodo.bind(this,item.id)}>
                <input
                  type="checkbox"
                  id="myCheck"
                  className="todoItems"
                  checked={item.done}
                />
                {item.task}
              </div>
            )
          )
        }
      </div>
      <div className="footer">
        <span className="countDisplay">
          {currentFilter.toLowerCase()} tasks: {myList.length}
        </span>
        <button 
          className={ ((myList.length === 0) || (currentFilter==='ACTIVE')) ? "hide" : "clearCompletedButton" } 
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