import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getAddTodoAction, getSetNotificationAction } from '../../actions/actionCreators';
import InputForm from './InputForm';

let errorTimeOut;

const InputFormContainer = ({ addTodo, setNotification }) => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(false);

    const onSubmit = e => e.preventDefault();

    //target vs currentTarget, why synthetic event vs native event
    const onInputChange = e => {
        setInputValue(e.target.value);
        setError(false);
    };

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            if (!e.target.value.trim()) {
                setError(true);
                //todo: snackBar
                errorTimeOut && clearTimeout(errorTimeOut);
                errorTimeOut = setTimeout(() => { setError(false) }, 2000);
                return false;
            }
            addTodo(e.target.value);
            setNotification(e.target.value);
            setInputValue('');
        }
    };

    return (
        <InputForm
            setNotification={setNotification}
            error={error}
            onSubmit={onSubmit}
            inputValue={inputValue}
            onChange={onInputChange}
            onKeyPress={onKeyPress}
        />
    );
}

export default connect(null, {
    addTodo: getAddTodoAction, 
    setNotification: getSetNotificationAction
})(InputFormContainer);