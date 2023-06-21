import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <div>
      <Container>
        <Main>
          <RedText>Dribble Hiring</RedText>
          <BigText>Hire the world’s top designers</BigText>
          <SmallText>
            Whether you prefer to actively seek out candidates using Designer
            Search or let designers come to you throu gh our Job Board, Dribbble
            Hiring makes it easier than ever to source top-notch design talent.
          </SmallText>
          <Button>Try For Free</Button>
          <Motto>No Risk. Cancel Anytime</Motto>
        </Main>
      </Container>
    </div>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Main = styled.div`
  width: 95%;
  height: 100%;
  font-size: 20px;
  margin-top: 100px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const RedText = styled.div`
  text-transform: uppercase;
  color: #ea4c89;
  margin-top: 20px;
`;

const BigText = styled.div`
  font-size: 72px;
  margin: 20px 0;
  color: #242337;
  font-family: Georgia, "Times New Roman", Times, serif;
`;

const SmallText = styled.div`
  width: 75%;
  text-align: center;
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

  :hover {
    background-color: #000;
  }
`;

const Motto = styled.div`
  font-size: 17px;
  color: silver;
`;
