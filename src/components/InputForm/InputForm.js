import React from 'react';
import "./InputForm.css";

const Inputform = (props) => (
  <div className="inputForm">
    <form onSubmit={props.onSubmit}>
      <input
        className={props.error ? "frminput redBorder" : "frminput"}
        type="text"
        value={props.currentInput}
        placeholder="Enter a task to be done"
        autoFocus
        onChange={props.onChange}
        onKeyPress={props.onKeyPress}
      />
    </form>
    {
      props.error ?
      <div className="showError">Error: Please enter a valid task</div>
      : null
    }
  </div>
);
export default Inputform;