import React from "react";
import Todo from "./components/todo/Todo";

class App extends React.Component {
  render() {
    return (
      <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            boxShadow: "0 0 10px 0",
            borderRadius: "10px",
            margin: "10px"
          }}
        >
          <h1
            style={{
              textAlign: "center",
              boxShadow: "0 2px 3px 0",
              borderRadius: "10px 10px 0 0",
              margin: "0 0 15px 0",
              padding: "10px"
            }}
          >
            Todo app
          </h1>
          <div style={{ display: "flex", rowGap: "5px", flexDirection: "column" }}>
            <Todo />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
