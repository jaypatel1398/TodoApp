import { connect } from 'react-redux';
import React from 'react';
import "./TodoAddedMessage.css";
import {setTodoAddedMessage} from '../../actions/actionCreators';
let timeOutId;
const TodoAddedMessage = ({task, setTodoAddedMessage}) => {
    timeOutId && clearTimeout(timeOutId);
    timeOutId = setTimeout(() => setTodoAddedMessage(''), 2000);
    return(
        task.trim()==='' ?
        <div></div>
        :<div className="container">
            <div className="todoAddedMessage">
                <span className="task">{task}</span> added to your todos!
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    task: state.task,
});

const mapDispatchToProps = (dispatch) => ({
    setTodoAddedMessage: task => dispatch(setTodoAddedMessage(task))
});

export default connect(mapStateToProps,mapDispatchToProps)(TodoAddedMessage);