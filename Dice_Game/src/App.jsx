import Firstpage from "./components/Firstpage";
import "./App.css";
import Game from "./components/Game";
import { useState } from "react";

function App() {
  const [Gamestart, setGamestart] = useState(false);

  const toggleplay = () => {
    setGamestart((prev) => !prev);
  };

  return (
    <div className="container">
      {!Gamestart ? <Firstpage toggle={toggleplay} /> : <Game />}
    </div>
  );
}

export default App;
