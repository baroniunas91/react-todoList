import React from "react";

export default (props) => (
  <div className="todo">
    <div
      className="todoText"
      style={{ textDecoration: props.todo.complete ? "line-through" : "" }}
      onClick={props.toogleComplete}
    >
      {props.todo.userInput}
    </div>
    <button className="btn btn-danger btn-sm" onClick={props.onDelete}>
      Delete
    </button>
  </div>
);
