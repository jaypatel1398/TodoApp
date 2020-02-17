import React, { useState } from 'react';
import { connect } from 'react-redux';
import {addTodo} from '../actions/actionCreators';
const Inputform = ({addTodo}) => {
  const [currentInput, setCurrentInput] = useState('');
  const [error, setError] = useState(false);
  return (
    <div className="inputForm">
      <form onSubmit={e => e.preventDefault()}>
        <input
          className={error ? "errorfrmInput" : "frminput"}
          type="text"
          value={currentInput}
          placeholder="Enter a task to be done"
          autoFocus={true}
          onChange={e => {
            setCurrentInput(e.target.value);
            setError(false);
          }}
          onKeyPress={(e) => {
            if (e.target.value === '') {
              setError(true);
              return false;
            }
            if (e.which === 13) {
              addTodo(e.target.value);
              setCurrentInput('');
            }
          }}
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