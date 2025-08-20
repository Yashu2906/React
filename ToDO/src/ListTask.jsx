import React, { useState } from "react";

const ListTask = ({ taskList, onDelete, onEdit }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState("");

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {taskList.map((item, index) => {
          return (
            <li key={index}>
              {editIndex === index ? (
                <div>
                  <input
                    type="text"
                    placeholder="Enter a new Task"
                    value={editTask}
                    onChange={(e) => {
                      setEditTask(e.target.value);
                    }}
                  />
                  <button
                    onClick={() => {
                      onEdit(index, editTask);
                      setEditIndex(null);
                      setEditTask("");
                    }}
                  >
                    save
                  </button>
                  <button
                    onClick={() => {
                      setEditIndex(null);
                      setEditTask("");
                    }}
                  >
                    cancel
                  </button>
                </div>
              ) : (
                <div>
                  {item}
                  {""}
                  <button
                    onClick={() => {
                      setEditIndex(index);
                      setEditTask(item);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      onDelete(index);
                    }}
                  >
                    Delete
                  </button>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListTask;
