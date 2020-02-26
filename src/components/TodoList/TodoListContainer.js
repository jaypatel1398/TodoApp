import React from 'react';
import { connect } from 'react-redux';
import { getToggleTodoAction, getRemoveTodoAction} from '../../actions/actionCreators';
import Todo from './Todo';
import _ from 'lodash';
import "./Todo.css";

const TodoListContainer = ({ todoList, currentFilter, toggleTodo, removeTodo }) => {
    let filteredTodos = todoList[currentFilter.key];

    return(
        <div className="scrollArea">
            {_.map(filteredTodos, (id) => {
                const todo = todoList.byId[id];
                return <Todo key={id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
            })}
        </div>
    );
};

const mapStateToProps = (state) => ({
    todoList: state.todoList,
    currentFilter: state.currentFilter
});

export default connect(mapStateToProps, {
    toggleTodo: getToggleTodoAction,
    removeTodo: getRemoveTodoAction
})(TodoListContainer);