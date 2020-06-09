import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Consumer } from "./Context";
import Todo from "./components/Todo";
import "./App.css";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";

const App = () => {
  {
    /* fetcing data from context api  and passing the data down as props */
  }
  return (
    <Consumer>
      {(value) => {
        return (
          <>
            <Header />
            <AddTodo value={value} />
            <Todo value={value} />
          </>
        );
      }}
    </Consumer>
  );
};

//app class acting as main class

export default App;
