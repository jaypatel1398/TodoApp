import React from 'react';
import filterTodos from '../../helpers/filterTodos';
import _ from 'lodash';
import { connect } from 'react-redux';
import {toggleTodo} from '../../actions/actionCreators';
import "./displayList.css";

const DisplayList = ({ listofTasks, currentFilter, toggleTodo }) => {
  let myList = listofTasks;
  myList = filterTodos(currentFilter.key, listofTasks);
  return(
    <div className="scrollArea">
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
  );
}

const mapStateToProps = (state) => ({
  listofTasks: state.listofTasks,
  currentFilter: state.currentFilter
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayList);