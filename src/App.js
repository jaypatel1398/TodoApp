import "./index.css";
import React, { useReducer, useState } from "react";
import DisplayFilters from './components/DisplayFilters';
import DisplayList from './components/DisplayList';
import InputForm from './components/InputForm';
import displayFilterTypes from './constants/displayFilterTypes';
import listofTasksReducer from './reducers/listofTasksReducer';
const App = () => {
  const [listofTasks, dispatchforListofTasks] = useReducer(listofTasksReducer, []);
  const [displayFilter, setDisplayFilter] = useState('ALL');
  return (
    <div className="Todo">
      <h1 className="title">Todos</h1>
      <div className="inputform">
        <InputForm addTodo={dispatchforListofTasks} />
      </div>
      <div className="statusButtons">
        <DisplayFilters
          displayFilterTypes={displayFilterTypes}
          setDisplayFilter={setDisplayFilter}
          displayFilter={displayFilter} />
      </div>
      <div className="listofTasks">
        <DisplayList
          listofTasks={listofTasks}
          toggletodo={dispatchforListofTasks}
          displayFilter={displayFilter} />
      </div>
    </div>
  );
}
export default App;
