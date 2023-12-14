import React from "react";
// components
import Todo from "./components/todo/Todo";
// styles
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <div>
          <h1 className="app-title">Todo app</h1>
          <div className="todo-container">
            <Todo />
            <Todo />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
