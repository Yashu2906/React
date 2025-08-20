import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      <div className="border-2 border-emerald-600 rounded-lg p-20 ">
        <form
          onSubmit={(e) => {
            SubmitHandler(e);
          }}
          className="flex flex-col items-center justify-center w-90 "
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Enter your email"
            className="required py-3 px-5 text-xl w-full m-3 text-black outline-none border-2 border-emerald-600 rounded-full placeholder:text-white-400"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter your password"
            className="required py-3 px-5 text-xl w-full m-3 text-black outline-none border-2 border-emerald-600 rounded-full placeholder:text-white-400"
          />
          <button
            type="submit"
            className="py-3 px-5 m-4 border-none text-xl w-full  outline-none bg-emerald-600 rounded-full placeholder:text-white"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
