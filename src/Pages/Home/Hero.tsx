import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  const myVideo = require("../../Assets/vid.mp4");
  const mapping: any = [
    {
      text: "Discover",
    },
    {
      text: "Animation",
    },
    {
      text: "Branding",
    },
    {
      text: "Illustration",
    },
    {
      text: "Mobile",
    },
    {
      text: "Print",
    },
    {
      text: "Product Design",
    },
    {
      text: "Typography",
    },
    {
      text: "Web Design",
    },
  ];

  const newMap: any = [
    {
      text: "landing page",
    },
    {
      text: "ios",
    },
    {
      text: "food",
    },
    {
      text: "Landing Page",
    },
    {
      text: "ui/ux design",
    },
    {
      text: "app design",
    },
  ];
  return (
    <div>
      <Container>
        <Video src={myVideo} autoPlay={true} loop playsInline />
        <Main>
          <Holder>
            {mapping.map((el: any) => (
              <Button pad="1" mag="1" bgh="1" clr="1" br="">
                {el.text}
              </Button>
            ))}
          </Holder>
          <h1>Explore the world’s leading design portfolios</h1>
          <p>
            Millions of designers and agencies around the world showcase their
            portfolio work on Dribbble - the home to the world’s best design and
            creative professionals.
          </p>
          <InputHolder>
            <Search />
            <Input placeholder="Search..." />
          </InputHolder>
          <TrendsHolder>
            <Text>Trending Searches: </Text>
            {newMap.map((el: any) => (
              <Button pad="" mag="" bgh="" clr="" br="1">
                {el.text}
              </Button>
            ))}
          </TrendsHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Hero;

const TrendsHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  margin-top: 20px;
`;

const Text = styled.div`
  margin-top: 10px;
  margin-right: 5px;
`;

const Holder = styled.div`
  display: flex;
`;

const Button = styled.div<{
  pad: string;
  mag: string;
  bgh: string;
  clr: string;
  br: string;
}>`
  padding: ${({ pad }) => (pad ? "20px" : "14px")};
  margin-top: ${({ mag }) => (mag ? "30px" : "15px")};
  margin-right: 15px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: all 350ms;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border: ${({ br }) => (br ? "1px solid grey" : "")};

  :hover {
    background-color: ${({ bgh }) => (bgh ? "white" : "")};
    color: ${({ clr }) => (clr ? "black" : "")};
    border: ${({ br }) => (br ? "1px solid white" : "")};
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
  color: white;
  padding: 50px 0;
  font-weight: 700;
`;

const Main = styled.div`
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h1 {
    font-size: 50px;
    width: 600px;
  }
  p {
    width: 650px;
    font-size: 25px;
  }
`;

const InputHolder = styled.div`
  background-color: white;
  border-radius: 30px;
  width: 600px;
  height: 50px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`;

const Input = styled.input`
  border: 0;
  outline: 0;
  width: 90%;
  font-size: 20px;
`;

const Search = styled(AiOutlineSearch)`
  color: grey;
  font-size: 30px;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
`;
