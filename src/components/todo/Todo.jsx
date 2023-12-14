import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <div style={{ display: "flex", columnGap: "10px", justifyContent: "space-between", padding: "0 10px" }}>
        <p>Learn React State</p>
        <button>Mark us complete</button>
      </div>
    );
  }
}

export default Todo;
