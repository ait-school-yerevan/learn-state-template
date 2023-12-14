import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  render() {
    return (
      <div className="container">
        <p className="title">Learn React State</p>
        <button className="btn">Mark us complete</button>
      </div>
    );
  }
}

export default Todo;
