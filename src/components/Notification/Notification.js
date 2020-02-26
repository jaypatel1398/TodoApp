import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { getSetNotificationAction } from '../../actions/actionCreators';
import "./Notification.css";

const Notification = ({task, setNotification}) => {

    useEffect(()=> {
        const timeOutId = setTimeout(() => setNotification(''), 2000);
        return () => clearTimeout(timeOutId);
    });

    return (
        <>
            {task && 
                <div className="Notification">
                    <span className="task">{task}</span> added to your todos!
                </div>
            }
        </>
    );
};

const mapStateToProps = (state) => ({
    task: state.task,
});

export default connect(mapStateToProps, { 
    setNotification: getSetNotificationAction 
})(Notification);