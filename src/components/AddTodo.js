import React from "react";

const AddTodo = ({ value }) => {
  const { title, onSubmit, handleInput } = value;
  return (
    <form onSubmit={onSubmit}>
      <input
        value={title}
        onChange={handleInput}
        type="text"
        name="title"
        id=""
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddTodo;
