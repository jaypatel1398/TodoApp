import React from 'react';
import filterList from './helper';
import _ from 'lodash';
import { connect } from 'react-redux';
import {toggletodo, toggleTodo} from '../actions/actionCreators';
const DisplayList = ({ listofTasks, displayFilter, toggletodo }) => {
  let myList = listofTasks;
  myList = filterList(displayFilter, listofTasks);
  console.log("rerender");
  console.log(myList);
  return (_.map(myList,
    (item, index) => (
      <div className="displayList" key={item.id}>
        <input
          type="checkbox"
          id="myCheck"
          className="todoItems"
          onChange={e => toggletodo(item.id)}
          checked={myList[index].done}
        />
        {item.task}
      </div>
    )));
}
const mapStateToProps = (state) => ({
  listofTasks: state.listofTasks,
  displayFilter: state.displayFilter
});
const mapDispatchToProps = (dispatch) => ({
  toggletodo: id => dispatch(toggleTodo(id))
});
export default connect(mapStateToProps, mapDispatchToProps)(DisplayList);