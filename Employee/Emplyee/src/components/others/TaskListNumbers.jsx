import React from "react";

const TaskListNumbers = () => {
  return (
    <div className="mt-5 flex justify-between gap-5">
      <div className="bg-red-400 rounded-xl px-6 py-9 w-[45%] ">
        <h2 className="text-3xl font-medium">0</h2>
        <h3 className="text-2xl font-medium">New Task</h3>
      </div>
      <div className="bg-blue-400 rounded-xl px-6 py-9 w-[45%] ">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-2xl font-medium">Completed</h3>
      </div>
      <div className="bg-green-400 rounded-xl px-6 py-9 w-[45%] ">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-2xl font-medium">Accepted</h3>
      </div>
      <div className="bg-yellow-400 rounded-xl px-6 py-9 w-[45%] ">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-2xl font-medium">Failed</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
