import React, { useState } from "react";
import TaskList from "./TaskList";
import "./App.css";

function App() {
  let [task, setTask] = useState("");
  let [tasks, setTasks] = useState([]);
  let [message, setMessage] = useState("Add a task to get started!");
  let [headingStyle, setHeadingStyle] = useState({});

  function addTask() {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setMessage("Task added: " + task + "!");
      setTask("");
      setHeadingStyle({ backgroundColor: "lightblue" });
    }
  }

  return (
    <div className="container mt-5">

      <h1 style={headingStyle}>React Task Planner</h1>

      <div className="card p-4 mb-4">

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter task name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button
          className="btn btn-primary"
          onClick={addTask}
        >
          Add Task
        </button>

      </div>

      <TaskList
        tasks={tasks}
        message={message}
      />

    </div>
  );
}

export default App;