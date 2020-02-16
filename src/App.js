import "./index.css";
import React from "react";
import DisplayFilters from './components/DisplayFilters';
import DisplayList from './components/DisplayList';
import InputForm from './components/InputForm';
import displayFilterTypes from './constants/displayFilterTypes';


//todo: try useReducer() hook

//keep better names for methods
//use arrow functions

//remove oninputchange
//check for empty input in onkeypress
//use lodash


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listofTasks: [],
      displayFilter: 'ALL',
      currentId: 0
    };
  }
  addTodo = (todoText) => {
    let id = this.state.currentId;
    let taskList = this.state.listofTasks;
    id++;
    taskList.push({ task: todoText, id: id, done: false });
    this.setState({
      listofTasks: taskList,
      currentId: id,
    });
  };
  onDisplayFilterChange = (filter) => {
    console.log(filter);
    console.log("display filter changed");
    this.setState({
      displayFilter: filter
    });
  }
  onCheck = (event, id) => {
    let taskList = this.state.listofTasks;
    let updatedTaskList = taskList.map(item => {
      if (item.id === id) item.done ? (item.done = false) : (item.done = true);
      return item;
    });
    this.setState({
      listofTasks: updatedTaskList
    });
  };
  render() {
    return (
      <div className="Todo">
        <h1 className="title">Todos</h1>
        <div className="inputform">
          <InputForm currentInput={this.state.currentInput} addTodo={this.addTodo}/>
        </div>
        <div className="statusButtons">
          <DisplayFilters filterList={displayFilterTypes} onDisplayFilterChange={this.onDisplayFilterChange} currentFilter={this.state.displayFilter}/>
        </div>
        <div className="listofTasks">
          <DisplayList list={this.state.listofTasks} check={this.onCheck} displayFilter={this.state.displayFilter}/>
        </div>
      </div>
    );
  }
}
export default App;
