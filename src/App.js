import React from "react";
import DisplayFilters from './components/DisplayFilters/DisplayFilters';
import DisplayList from './components/DisplayList/DisplayList';
import InputForm from './components/InputForm/InputForm';
import TodoAddedMessage from './components/TodoAddedMessage/TodoAddedMessage';
import Footer from './components/Footer/Footer';
import "./App.css";

const App = () => {
  return (
    <div>
      <TodoAddedMessage/>
        <h1 className="title">Todos</h1>
        <InputForm/>
        <DisplayFilters/>
        <DisplayList/>
        <Footer/>
    </div>
  );
}

export default App;

//make a new component for displaying a message