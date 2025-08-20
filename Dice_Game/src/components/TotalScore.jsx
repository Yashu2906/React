import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <Main>
      <div className="score">
        <h1>{score}</h1>
        <p>Total Score</p>
      </div>
    </Main>
  );
};

export default TotalScore;

const Main = styled.main`
  display: flex;
  justify-content: center;

  .score {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 0 0 36.5px;
    width: 135px;
    max-height: 150px;
    margin-top: 0px;
    position: relative;
    top: -40px;
    left: -100px;
  }
  .score h1 {
    font-size: 100px;
    font-weight: 500;
    max-height: 30px;
  }
  .score p {
    font-size: 24px;
    font-weight: 500;
  }
`;
