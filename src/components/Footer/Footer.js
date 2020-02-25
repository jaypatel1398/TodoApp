import React from 'react';
import "./Footer.css";

const Footer = (props) => (
    <div className="footer">
        <span className="countDisplay">
            {props.currentFilter.label} tasks: {props.taskCount}
        </span>
        {
            props.showClearCompletedButton ? 
            <button 
                className="clearCompletedButton"
                onClick={props.onClick}>
                Clear Completed
            </button>
            : null
        }
    </div>
);

export default Footer;