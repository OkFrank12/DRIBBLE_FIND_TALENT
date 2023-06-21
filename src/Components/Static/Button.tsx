import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <div>
      <Container>Button</Container>
    </div>
  );
};

export default Button;

const Container = styled.div`
  padding: 5px 10px;
  width: 130px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
  font-size: 17px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: all 350ms;

  :hover{
    background-color: darkblue;
  }
`;
