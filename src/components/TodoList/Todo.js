import React from 'react';
import _ from 'lodash';
import "./Todo.css";

const TodoList = (props) => (
  <div className="displayList">
    <span>
      <input
        type="checkbox"
        id="myCheck"
        className="todoItems"
        checked={props.todo.completed}
        onClick={_.partial(props.toggleTodo, props.todo.id)}
      />
      {props.todo.task}
    </span>
    <button className="removeTodoButton" onClick={_.partial(props.removeTodo, props.todo.id)}>X</button>
  </div>
);

export default TodoList;