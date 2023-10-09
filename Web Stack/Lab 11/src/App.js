// App.js
import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import {
  loadTasksFromLocalStorage,
  saveTasksToLocalStorage,
} from "./localStorage";
// import "./App.css"; // Import the CSS file

function App() {
  const [tasks, setTasks] = useState(loadTasksFromLocalStorage());
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

  const addTask = (newTask) => {
    if (taskToEdit !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[taskToEdit] = newTask;
      setTasks(updatedTasks);
      setTaskToEdit(null);
    } else {
      setTasks([...tasks, newTask]);
    }
  };

  const editTask = (index) => {
    setTaskToEdit(index);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="p-4 container">
      <h2 className="flex justify-content-center mt-3 mb-9 bg-black text-center text-semibold text-5xl text-white p-4 rounded-2xl shadow shadow-gray-900 font-mono">
        T A S K - M A N A G E R
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-8 w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
        </svg>
      </h2>

      <div className="flex md:align-items-center p-4 grid gap-4 grid-cols-2 rounded-2xl shadow">
        <div className="p-2">
          <TaskForm
            onSubmit={addTask}
            taskToEdit={taskToEdit !== null ? tasks[taskToEdit] : null}
          />
        </div>
        <div className="p-4 border-gray-200 border-l">
          <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
        </div>
      </div>


    </div>
  );
}

export default App;
