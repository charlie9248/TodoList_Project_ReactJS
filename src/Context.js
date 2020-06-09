import React, { Component } from "react";
import axios from "axios";
import uuid from "uuid";

const Context = React.createContext();

export class Provider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      title: "",
    };
  }

  componentDidMount = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => {
        this.setState({
          todos: res.data.slice(0, 10),
        });
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  onComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  onDelete = (id) => {
    let tempTodos = [...this.state.todos];
    tempTodos = tempTodos.filter((todo) => todo.id !== id);
    this.setState({
      todos: tempTodos,
    });
  };

  handleInput = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const todo = {
      id: uuid.v4(),
      title: this.state.title,
      completed: false,
    };

    this.setState({
      todos: [...this.state.todos, todo],
      title: "",
    });
  };

  render() {
    console.log(this.state);
    return (
      <Context.Provider
        value={{
          ...this.state,
          onComplete: this.onComplete,
          onDelete: this.onDelete,
          handleInput: this.handleInput,
          onSubmit: this.onSubmit,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
