import React from "react";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";
import ConnectCounterContainer from "./containers/ConnectCounterContainer";
import ConnectTodosContainer from "./containers/ConnectTodosContainer";

function App() {
  return (
    <>
      <CounterContainer />
      <hr />
      <TodosContainer />
      <hr />
      <ConnectCounterContainer />
      <hr />
      <ConnectTodosContainer />
    </>
  );
}

export default App;
