import React from 'react';
import "./Notification.css";

const Notification = (props) => (
    <div className={props.notify ? "Notification" : "hide"}>
        <span className="task">{props.task}</span> added to your todos!
    </div>
);

export default Notification;