import React, { useState } from 'react';
const Inputform = (props) => {
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
              props.addTodo({
                type: 'ADDTODO',
                payload: {
                  task: e.target.value
                }
              });
              setCurrentInput('');
            }
          }}
        />
      </form>
      <span className={error ? "showError" : "hide"}>Error: Please enter a valid task</span>
    </div>
  );
}
export default Inputform;