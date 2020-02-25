import React from 'react';
import "./Notification.css";

const Notification = (props) => (
    props.notify ?
    <div className="Notification">
        <span className="task">{props.task}</span> added to your todos!
    </div>
    : null
);

export default Notification;