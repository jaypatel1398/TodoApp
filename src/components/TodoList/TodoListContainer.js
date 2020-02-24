import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo} from '../../actions/actionCreators';
import Todo from './Todo';
import _ from 'lodash';
import "./Todo.css";
import filterTypes from '../../constants/filterTypes';

const TodoListContainer = ({ todoList, currentFilter, toggleTodo, removeTodo }) => {
    let filteredTodos = [...todoList.allIds];
    if(currentFilter.key===filterTypes.COMPLETED.key)
        filteredTodos = [...todoList.completedIds];
    if(currentFilter.key===filterTypes.ACTIVE.key)
        filteredTodos = [...todoList.activeIds];
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

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    removeTodo: id => dispatch(removeTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);