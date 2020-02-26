import React from 'react';
import "./Footer.css";

const Footer = (props) => (
    <div className="footer">
        <span className="countDisplay">
            {props.currentFilter.label} tasks: {props.taskCount}
        </span>
        <button 
            className="clearCompletedButton" 
            onClick={props.onClick} 
            disabled={props.disableClearCompleted}>
            Clear Completed
        </button> 
    </div>
);

export default Footer;