import React from "react";
import images from "../../Assets/lSn7CdDjdm73O1nwfrasVIfPI.png";
import images2 from "../../Assets/0L31RjtpWckX4PrYDzYPMvQRHM.png";
import styled from "styled-components";

const Feeds = () => {
  return (
    <div>
      <Container>
        <Main>
          <TextBox>
            <Text>
              “Dribbble is my go-to for hiring designers. It always provides a
              wealth of quality candidates and instantly builds my pipeline.”
            </Text>
            <Div>
              <Circle>
                <Img src={images} />
              </Circle>
              <SmallText>
                Lee Munroe — <span>Head of design, OneSignal</span>
              </SmallText>
            </Div>
          </TextBox>
          <GradientBox>
            <Imgs src={images2} />
          </GradientBox>
        </Main>
      </Container>
    </div>
  );
};

export default Feeds;

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Imgs = styled.img`
  width: 100px;
  height: 100px;
  transition: all 350ms;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  height: 100%;

  :hover{
    ${Imgs}{
      rotate: calc(10deg);
      transform: scale(1.09);
    }
  }
`;

const TextBox = styled.div`
  border: 1px solid silver;
  padding: 25px;
  width: 510px;
  border-radius: 20px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  height: 250px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const GradientBox = styled.div`
  border-radius: 20px;
  display: flex;
  justify-content: center;
  padding: 25px;
  height: 250px;
  align-items: center;
  width: 230px;
  background: rgb(66, 145, 222);
  background: linear-gradient(
    180deg,
    rgba(66, 145, 222, 1) 0%,
    rgba(100, 155, 226, 1) 29%,
    rgba(252, 196, 243, 1) 90%,
    rgba(252, 196, 243, 1) 99%
  );
`;

const Text = styled.div`
  font-size: 30px;
`;

const Div = styled.div`
  font-size: 25px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

const Circle = styled.div`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const SmallText = styled.div`
  font-weight: 500;
  margin-left: 15px;

  span {
    color: grey;
  }
`;
