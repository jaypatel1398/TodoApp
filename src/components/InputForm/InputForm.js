import React from 'react';
import "./InputForm.css";
import classNames from 'classnames';

const Inputform = (props) => (
  <div className="inputForm">
    <input
      className={classNames('frminput',{ 'redBorder': props.error })}
      type="text"
      value={props.inputValue}
      placeholder="Enter a task to be done"
      autoFocus
      onChange={props.onChange}
      onKeyPress={props.onKeyPress}
    />
    <div className="errorDiv">{ props.error && <div className="showError">Error: Please enter a valid task</div> }</div>
  </div>
);
export default Inputform;