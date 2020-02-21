import { connect } from 'react-redux';
import React from 'react';
import {setNotification} from '../../actions/actionCreators';
import Notification from './Notification';

let timeOutId;
const NotificationContainer = ({task, setNotification}) => {
    timeOutId && clearTimeout(timeOutId);
    timeOutId = setTimeout(() => setNotification(''), 2000);
    let notify = task.trim()!=='';
    return <Notification task={task} notify={notify}/>;
};

const mapStateToProps = (state) => ({
    task: state.task,
});

const mapDispatchToProps = (dispatch) => ({
    setNotification: task => dispatch(setNotification(task))
});

export default connect(mapStateToProps,mapDispatchToProps)(NotificationContainer);