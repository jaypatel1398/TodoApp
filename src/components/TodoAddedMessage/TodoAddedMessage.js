import { connect } from 'react-redux';
import React from 'react';
import "./TodoAddedMessage.css";
const TodoAddedMessage = ({todoAddedObject}) => (
    todoAddedObject.task ? 
    <div className="container">
        <div className="todoAddedMessage">
            <span className="task">{todoAddedObject.task}</span> added to your todos!
        </div>
    </div>
    : <div></div>
);

const mapStateToProps = (state) => ({
    todoAddedObject: state.todoAddedObject,
});

export default connect(mapStateToProps)(TodoAddedMessage);