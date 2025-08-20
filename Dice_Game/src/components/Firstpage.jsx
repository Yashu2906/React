import Btn from "./button";
import styled from "styled-components";

const Firstpage = ({ toggle }) => {
  return (
    <Main>
      <div className="dice_image">
        <img src="./public/images/dices 1.png" alt="Dice Image"></img>
      </div>
      <div className="content">
        <h1 className="title">DICE GAME</h1>
        <Btn onClick={toggle} text="Play Now" />
      </div>
    </Main>
  );
};

export default Firstpage;

const Main = styled.main`
  display: flex;
  margin-top: 80px;
  align-items: center;

  .title {
    font-size: 96px;
    margin: 0 auto;
  }
  .dice_image {
    height: 522px;
    width: 649px;
    margin-left: 100px;
  }
  .content {
    margin-left: 100px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    max-width: 528px;
  }
`;
