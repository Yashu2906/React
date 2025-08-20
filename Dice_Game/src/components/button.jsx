import styled from "styled-components";

const Btn = ({ onClick, text }) => {
  return (
    <div>
      <Button onClick={onClick}>{text}</Button>
    </div>
  );
};

export default Btn;

const Button = styled.div`
  background-color: black;
  color: white;
  width: 220px;
  height: 30px;
  padding: 10px 18px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px bold;
  font-weight: 500;
  cursor: pointer;
  position: absolute;

  &:hover {
    background-color: white;
    border: 2px solid black;
    color: black;
    transition: 0.3s background ease;
  }
`;
