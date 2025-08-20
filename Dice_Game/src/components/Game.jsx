import styled from "styled-components";
import Btn from "./button";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { useState, useEffect } from "react";
const Game = () => {
  const [score, setScore] = useState(0);
  const [selectNumber, setSelectNumber] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (selectNumber === null) {
      setError("You have not selected any number");
    } else {
      setError("");
    }
  }, [selectNumber]);
  return (
    <div>
      <Main>
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          selectNumber={selectNumber}
          setSelectNumber={setSelectNumber}
        />
      </Main>
      <RollDice selectNumber={selectNumber} setScore={setScore} />
      <div>
        <Btn text="Show Rules" />
        <Btn text="Reset Score" />
      </div>
    </div>
  );
};

export default Game;

const Main = styled.main`
  display: flex;
  align-items: end;
  justify-content: space-around;
`;
