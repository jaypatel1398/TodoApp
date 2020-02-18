import React from "react";
import DisplayFilters from './components/DisplayFilters/DisplayFilters';
import DisplayList from './components/DisplayList/DisplayList';
import InputForm from './components/InputForm/InputForm';
import "./App.css";

const App = () => {
  return (
    <div className="Todo">
      <h1 className="title">Todos</h1>
      <div className="inputform">
        <InputForm/>
      </div>
      <div className="statusButtons">
        <DisplayFilters/>
      </div>
      <div className="listofTasks">
        <DisplayList/>
      </div>
    </div>
  );
}

export default App;