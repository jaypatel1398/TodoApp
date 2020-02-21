import React from 'react';
import { filterTodos } from '../../helpers/filterTodos';
import { connect } from 'react-redux';
import { toggleTodo } from '../../actions/actionCreators';
import Todo from './Todo';
import _ from 'lodash';
import "./Todo.css";

const TodoListContainer = ({ todoList, currentFilter, toggleTodo }) => (
    <div className="scrollArea">
        {_.map(filterTodos(currentFilter.key, todoList), (todo) => (
            <Todo todo={todo} toggleTodo={toggleTodo}/>
        ))}
    </div>
);

const mapStateToProps = (state) => ({
    todoList: state.todoList,
    currentFilter: state.currentFilter
});

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);