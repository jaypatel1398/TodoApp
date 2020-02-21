import React from "react";
import "./App.css";
import FilterContainer from "./components/Filter/FilterContainer";
import FooterContainer from "./components/Footer/FooterContainer";
import InputFormContainer from "./components/InputForm/InputFormContainer";
import NotificationContainer from "./components/Notification/NotificationContainer";
import TodoListContainer from "./components/TodoList/TodoListContainer";

const App = () => {
  return (
    <div>
      <NotificationContainer/>
      <div className="App">
        <h1 className="title">Todos</h1>
        <InputFormContainer/>
        <FilterContainer/>
        <TodoListContainer/>
        <FooterContainer/>
      </div>
    </div>
  );
}

export default App;