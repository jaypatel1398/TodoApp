import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import {addTodo, setTodoAddedMessage} from '../../actions/actionCreators';
import "./inputForm.css";

let timeoutId;
const Inputform = ({addTodo, setTodoAddedMessage}) => {
  const [currentInput, setCurrentInput] = useState('');
  const [error, setError] = useState(false);
  const onsubmitCallback = useCallback(
    e => e.preventDefault(),
    []
  );

  const onInputChangeCallback = useCallback(
    e => {
      setCurrentInput(e.target.value);
      setError(false);
      setTodoAddedMessage(false,'');
      timeoutId && clearTimeout(timeoutId);
    },
    []
  );

  const onKeyPressCallback = useCallback(
    e => {
      if (e.target.value.trim() === '') {
        setError(true);
        setTimeout( () => { setError(false) }, 2000);
        return false;
      }
      if (e.which === 13) {
        addTodo(e.target.value);
        setTodoAddedMessage(true, e.target.value);
        timeoutId = setTimeout(() => setTodoAddedMessage(false,''), 2000);
        setCurrentInput('');
      }
    },
    []
  );

  return (
    <div className="inputForm">
      <form onSubmit={onsubmitCallback}>
        <input
          className={error ? "frminput redBorder" : "frminput"}
          type="text"
          value={currentInput}
          placeholder="Enter a task to be done"
          autoFocus
          onChange={onInputChangeCallback}
          onKeyPress={onKeyPressCallback}
        />
      </form>
      <div className={error ? "showError" : "hide"}>Error: Please enter a valid task</div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: task => dispatch(addTodo(task)),
  setTodoAddedMessage: (todoAdded, task) => dispatch(setTodoAddedMessage({todoAdded: todoAdded, task: task}))
})

export default connect(null, mapDispatchToProps)(Inputform);