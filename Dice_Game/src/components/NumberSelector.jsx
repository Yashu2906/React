import styled from "styled-components";
const NumberSelector = ({ error, selectNumber, setSelectNumber }) => {
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <Container>
      <p className="error">{error}</p>
      <div className="flex">
        {arr.map((value, i) => (
          <Box
            isSelected={value == selectNumber}
            key={i}
            onClick={() => {
              setSelectNumber(value);
            }}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </Container>
  );
};

export default NumberSelector;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: 10px;

  .error {
    color: red;
  }
  .flex {
    display: flex;
    gap: 24px;
    align-items: end;
  }
  p {
    font-size: 24px;
    font-weight: 500;
    margin-top: 5px;
  }
`;
const Box = styled.div`
  border: 1.5px solid black;
  height: 72px;
  width: 72px;
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};

  &:hover {
    transition: 0.3s background ease-out;
    background-color: black;
    color: white;
  }
`;
