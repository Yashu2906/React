import React, { useState } from "react";
import ListTask from "./ListTask";

const App = () => {
  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTask("");
    setListTask([...listTask, task]);
    console.log(task);
  }

  function handleDelete(deleteToIndex) {
    const updatedList = listTask.filter((_, index) => index !== deleteToIndex);
    setListTask(updatedList);
  }

  function handleEdit(index, newTaskValue) {
    const updatedList = listTask.map((task, i) =>
      i === index ? newTaskValue : task
    );
    setListTask(updatedList);
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter a new Task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button type="submit" onClick={handleSubmit}>
          Add Task
        </button>
        <hr />
      </form>
      <ListTask
        taskList={listTask}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default App;
