import { useState } from "react";
import styled from "styled-components";

const RollDice = ({ selectNumber, score, setScore }) => {
  const [dice, setDice] = useState(1);

  const randomNumber = (max) => {
    return Math.floor(Math.random() * max + 1);
  };
  const rollDice = () => {
    if (selectNumber === null) return;
    const RandomNumber = randomNumber(6);
    setDice((prev) => RandomNumber);

    if (selectNumber == RandomNumber) {
      setScore((prev) => prev + RandomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
  };

  return (
    <Dicecontainer>
      <div onClick={rollDice}>
        <img src={`/images/dice_${dice}.png`} alt="Dice Image" />
        {score}
        <p>Click on Dice to roll</p>
      </div>
    </Dicecontainer>
  );
};

export default RollDice;

const Dicecontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  p {
    font-size: 24px;
    font-weight: 500;
    margin: 0 0 0 7px;
  }
`;
