import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, setNotification } from '../../actions/actionCreators';
import InputForm from './InputForm';

let errorTimeOut;

const InputFormContainer = ({ addTodo, setNotification }) => {
    const [currentInput, setCurrentInput] = useState('');
    const [error, setError] = useState(false);

    const onSubmit = e => e.preventDefault();

    const onInputChange = e => {
        setCurrentInput(e.target.value);
        setError(false);
    };

    const onKeyPress = e => {
        if (e.which === 13) {
            if (e.target.value.trim() === '') {
                setError(true);
                errorTimeOut && clearTimeout(errorTimeOut);
                errorTimeOut = setTimeout(() => { setError(false) }, 2000);
                return false;
            }
            addTodo(e.target.value);
            setNotification(e.target.value);
            setCurrentInput('');
        }
    };

    return (
        <InputForm
            setNotification={setNotification}
            error={error}
            onSubmit={onSubmit}
            currentInput={currentInput}
            onChange={onInputChange}
            onKeyPress={onKeyPress}
        />
    );
}

const mapDispatchToProps = (dispatch) => ({
    addTodo: task => dispatch(addTodo(task)),
    setNotification: task => dispatch(setNotification(task))
})

export default connect(null, mapDispatchToProps)(InputFormContainer);