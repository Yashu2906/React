import React from "react";

const CreateTask = () => {
  return (
    <div>
      <form className="flex px-30 py-5 bg-[#1c1c1c] h-full align-center justify-between   ">
        <div className="flex flex-col gap-3 ">
          <div>
            <h3 className="mb-1">Task Title</h3>
            <input id="input" type="text" placeholder="Make a UI design" />
          </div>
          <div>
            <h3 className="mb-1" id="date">
              Date
            </h3>
            <input id="input" type="date" />
          </div>
          <div>
            <h3 className="mb-1">Assign To</h3>
            <input id="input" type="text" placeholder="Employee Name " />
          </div>
          <div>
            <h3 className="mb-1">Category</h3>
            <input id="input" type="text" placeholder="design,dev,etc" />
          </div>
        </div>
        <div className="flex flex-col gap-3 ">
          <div>
            <h3 className="mb-1">Description</h3>
            <textarea className="border-[#c2bfbfe7] w-140 h-50 border-1 text-[#c2bfbfe7] px-3 py-2 rounded-lg"></textarea>
          </div>
          <div>
            <button className="py-3 px-5  border-none text-xl w-full  outline-none bg-emerald-600 rounded-lg placeholder:text-white">
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
