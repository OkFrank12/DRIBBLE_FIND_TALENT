import React from 'react'
import styled from 'styled-components';

const Creative = () => {
  return (
    <div>
       <Container>
        <Main>
          <BigText>Find your next creative professional today</BigText>
          <SmallText>
          Tap into our ready-to-hire community of 1 million top designers worldwide with one of our seamless hiring solutions.
          </SmallText>
          <Button>Try For Free</Button>
          <Motto>No Risk. Cancel Anytime</Motto>
        </Main>
      </Container>
    </div>
  )
}

export default Creative


const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #F6CEE3;
`;

const Main = styled.div`
  width: 95%;
  height: 100%;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BigText = styled.div`
  font-size: 72px;
  color: #242337;
  width: 750px;
  text-align: center;
  font-family: Georgia, "Times New Roman", Times, serif;
`;

const SmallText = styled.div`
  text-align: center;
  margin: 20px 0;
`;

const Button = styled.div`
  padding: 15px;
  border-radius: 10px;
  color: white;
  font-size: 17px;
  transition: all 350ms;
  cursor: pointer;
  margin: 20px 0;
  background-color: #100f22;

  :hover{
    background-color: #000;
  }
`;

const Motto = styled.div`
  font-size: 17px;
`;
