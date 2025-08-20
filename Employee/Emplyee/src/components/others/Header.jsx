import React from "react";

const Header = () => {
  return (
    <div className="flex items-end justify-between px-30 py-10 bg-[#1c1c1c]">
      <div className="tracking-wider text-2xl">
        Hello <br />
        <span className="text-3xl font-medium">Yash 👋</span>
      </div>
      <button className="bg-red-600 text-lg font-medium text-white-200 rounded px-3 py-1">
        Log Out
      </button>
    </div>
  );
};

export default Header;
