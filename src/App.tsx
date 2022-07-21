import React from "react";
import Todos from "./features/todo/containers/Todos/Todos";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="App__header">Updraft Todos</h1>
      <Todos />
    </div>
  );
}

export default App;
