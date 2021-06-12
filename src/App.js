import React, { useState } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  const [todos, setTodos] = useState([]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    const newItem = { title: newTask, isComplete: false };
    setTodos([newItem, ...todos]);
    setNewTask("");
  };

  const remove = (el) => {
    setTodos(todos.filter((x) => x !== el));
  };

  const moveUp = (el) => {
    const newList = todos.filter((x) => x !== el);

    setTodos([{ ...el, isComplete: !el.isComplete }, ...newList]);
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Todo App</h1>
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              style={{ width: "80%" }}
              name="task"
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add new task"
            />
            <button type="submit" onClick={addTask} className="btn btn-primary">
              Hozzáadás
            </button>
          </form>
        </div>
        <div className="list col-lg-4">
          {todos.length < 1 && <h3>You don't have any task to do.</h3>}
          {todos.map((el) => (
            <Button el={el} moveUp={moveUp} remove={remove} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
