import React from 'react';
import "./Footer.css";

const Footer = (props) => (
    <div className="footer">
        <span className="countDisplay">
            {props.currentFilter.label} tasks: {props.taskCount}
        </span>
        <button 
            className={ props.showClearCompletedButton ? "hide" : "clearCompletedButton" } 
            onClick={props.onClick}>
            Clear Completed
        </button>
    </div>
);

export default Footer;