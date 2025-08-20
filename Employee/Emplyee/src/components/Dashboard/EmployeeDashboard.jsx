import React from "react";
import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import TaskList from "../Task/TaskList";

const EmployeeDashboard = () => {
  return (
    <div>
      <Header />
      <div className="px-30  bg-[#1c1c1c] h-screen py-1">
        <TaskListNumbers />
        <TaskList />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
