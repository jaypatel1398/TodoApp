import React from 'react';
import _ from 'lodash';
import "./Todo.css";

const TodoList = (props) => (
  <div className="displayList" 
    key={props.todo.id}
    onClick={_.partial(props.toggleTodo, props.todo.id)}>
    <input
      type="checkbox"
      id="myCheck"
      className="todoItems"
      checked={props.todo.completed}
      readOnly
    />
    {props.todo.task}
  </div>
);

export default TodoList;