import { useState } from "react";
export default function () {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, red: 0, green: 0 });
  let updateblue = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, blue: prevMoves.blue + 1 };
    });
  };
  let updateyellow = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, yellow: prevMoves.yellow + 1 };
    });
  };
  let updatered = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, red: prevMoves.red + 1 };
    });
  };
  let updategreen = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, green: prevMoves.green + 1 };
    });
  };
  return (
    <div>
      <h2>Start the Game !</h2>
      <p>Blue Moves : {moves.blue} </p>
      <button style={{ backgroundColor: "blue" }} onClick={updateblue}>
        +1
      </button>
      <p>Yellow Moves : {moves.yellow}</p>
      <button style={{ backgroundColor: "yellow" }} onClick={updateyellow}>
        +1
      </button>
      <p>Red Moves : {moves.red}</p>
      <button style={{ backgroundColor: "Red" }} onClick={updatered}>
        +1
      </button>
      <p>Green Moves : {moves.green}</p>
      <button style={{ backgroundColor: "green" }} onClick={updategreen}>
        +1
      </button>
    </div>
  );
}
