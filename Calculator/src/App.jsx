import Display from "./display";
import Button from "./button";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <h1>Calculator</h1>
      <Display input={input} />
      <Button setInput={setInput} />
    </div>
  );
}
