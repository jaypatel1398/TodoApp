import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import {addTodo} from '../../actions/actionCreators';
import "./inputForm.css";

const Inputform = ({addTodo}) => {
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
    },
    []
  );

  const onKeyPressCallback = useCallback(
    e => {
      if (e.target.value.trim() === '') {
        setError(true);
        return false;
      }
      if (e.which === 13) {
        addTodo(e.target.value);
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
      <span className={error ? "showError" : "hide"}>Error: Please enter a valid task</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: task => dispatch(addTodo(task))
})

export default connect(null, mapDispatchToProps)(Inputform);