// TaskForm.js
import React, { useState, useEffect } from "react";

const TaskForm = ({ onSubmit, taskToEdit }) => {
  const [task, setTask] = useState(taskToEdit || { name: "", description: "" });

  useEffect(() => {
    setTask(taskToEdit || { name: "", description: "" });
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name.trim() === "" || task.description.trim() === "") {
      return; // Prevent submission if name or description is empty
    }
    onSubmit(task);
    setTask({ name: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="taskName" className="form-label text-bold text-xl font-mono">
          Task Name
        </label>
        <input
          type="text"
          className="form-control shadow shadow-white-500 font-mono"
          id="taskName"
          autoComplete="off"
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="taskDescription" className="form-label text-bold text-xl font-mono">
          Task Description
        </label>
        <textarea
          className="h-32 form-control shadow font-mono"
          id="taskDescription"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
      </div>

      <button id="any"
        type="submit"
        className={taskToEdit ?
          "Edit Task flex text-white bg-gray-500 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" :
          "Add Task flex text-white bg-gray-500 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        }
      >
        {taskToEdit ?
          (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>

          ) :
          (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </>
          )
        }
      </button>

    </form>
  );
};

export default TaskForm;
