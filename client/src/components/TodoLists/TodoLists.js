import React from "react";

const TodoLists = ({ todoInfos, deleteHandler }) => {
  const { _id, name, score } = todoInfos;

  return (
    <li key={_id}>
      <div className="title-description">
        <h2>Player: {name}</h2>
        <h1></h1>
        <p>Total Attempts {score}</p>
      </div>
      <h1></h1>
      <div className="todo-btn-container">
        {/* <button className="todo-btn" name={_id} onClick={editHandler}>
          🖊️
        </button> */}
        <button className="todo-btn" name={_id} onClick={deleteHandler}>
          🗑️
        </button>
      </div>
    </li>
  );
};

export default TodoLists;
