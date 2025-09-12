import React, { useState, useEffect } from "react";
import "./App.css";

import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import CompletedTasks from "./components/CompletedTasks";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [taskText, setTaskText] = useState("");
  const [taskDate, setTaskDate] = useState("");


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const today = new Date();
  const todayStr = today.toISOString().split("T")[0]; // YYYY-MM-DD

  // Add task (sorted by date)
  const addTask = () => {

    // If string is empty then task will not be added to the list
    if (!taskText || !taskDate) return;

    // Can't add task to the dates that are long gone 
    if (new Date(taskDate) < new Date(todayStr)) {
      alert("⚠ You cannot add tasks for past dates!");
      return;
    }

    const newTask = {
      id: Date.now(),
      text: taskText,
      date: taskDate,
      completed: false,
    };

    // Sort the task list in according to the dates
    const updatedTasks = [...tasks, newTask].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    setTasks(updatedTasks);
    setTaskText("");
    setTaskDate("");
  };


  // Line through for completed tasks
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // 
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completedTasks = tasks.filter((t) => t.completed);


  return (
    <div className="app">
      <h1>📌 To-Do List</h1>

      {/* Task Input */}
      <TaskInput
        taskText={taskText}
        setTaskText={setTaskText}
        taskDate={taskDate}
        setTaskDate={setTaskDate}
        addTask={addTask}
        todayStr={todayStr}
      />

      {/* Display Tasks */}
      <div className="main-content">
        <TaskList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} />
        <CompletedTasks tasks={completedTasks} />
      </div>

    </div>
  );
}

export default App;
