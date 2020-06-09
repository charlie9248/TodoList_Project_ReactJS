import React from "react";
import TodoItem from "./TodoItem";

const Todo = ({ value }) => {
  const { todos } = value;
  console.log(value);

  {
    /* looping from array to data to display a single item */
  }

  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} value={value} />
      ))}
    </>
  );
};

export default Todo;
