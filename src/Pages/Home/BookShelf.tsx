import React from "react";
import styled from "styled-components";
import { BsArrowDown } from "react-icons/bs";

const BookShelf = () => {
  return (
    <div>
      <Container>
        <Main>
          <ButtonHolder>
            <Button>
              Popular <Arrow />
            </Button>
            <Button>Filter</Button>
          </ButtonHolder>
        </Main>
      </Container>
    </div>
  );
};

export default BookShelf;

const Button = styled.div`
  padding: 10px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  width: 120px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  height: 100%;
`;

const ButtonHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Arrow = styled(BsArrowDown)`
  font-size: 12px;
`;
