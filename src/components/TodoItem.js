import React from "react";

const TodoItem = ({ todo, value }) => {
  const { id, title, completed } = todo;
  const { onComplete, onDelete } = value;
  // handle dynamic css rendering
  const onLineThrough = () => {
    return {
      background: "var(--mainBlue)",
      color: "var(--mainWhite)",
      borderBottom: "0.01rem solid var(--mainYellow)",
      padding: "0.5rem",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  {
    /* displaying single item in  todolist */
  }

  return (
    <div id="todostyle" style={onLineThrough()}>
      <input onChange={() => onComplete(id)} type="checkBox" />
      {title}
      <button onClick={() => onDelete(id)} className="div-btn">
        X
      </button>
    </div>
  );
};

export default TodoItem;
