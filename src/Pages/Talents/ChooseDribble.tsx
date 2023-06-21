import React from "react";
import styled from "styled-components";
import dia from "../../Assets/diamond.jpg";
import bigImg from "../../Assets/0TtfYwyN7iamHhWxGN9PfXLFhE.svg";
import dolla from "../../Assets/dollars.jpg";
import shield from "../../Assets/shield.jpg";

const ChooseDribble = () => {
  const props: any = [
    {
      txt: "World-class talent",
      text: "From graphic design to UX/UI, our community is home to the world’s leading designers and creative agencies.",
      bg: "#e6fbfe",
      img: dia,
      w: "170px",
    },
    {
      txt: "$0 placement fees",
      text: "We make the hiring process as seamless and cost-effective as possible, so you can focus on building your business.",
      bg: "#E3EBFD",
      img: dolla,
      w: "170px",
    },
    {
      txt: "Global reach",
      text: "With a network of designers spanning over 170 countries, we make it easy to find world-class talent, wherever you are in the world.",
      bg: "#EDDDFB",
      img: shield,
      w: "120px",
    },
  ];
  return (
    <div>
      <Container>
        <Main>
          <Text>Why brands choose Dribbble to hire design talent</Text>
          <Holder>
            <Left>
              {props.map((props: any) => (
                <InlineLeft>
                  <Img src={props.img} />
                  <Txt bg={`${props.bg}`} w={`${props.w}`}>
                    {props.txt}
                  </Txt>
                  <TinyTxt>{props.text}</TinyTxt>
                </InlineLeft>
              ))}
            </Left>
            <Right>
              <Imgs src={bigImg} />
            </Right>
          </Holder>
        </Main>
      </Container>
    </div>
  );
};

export default ChooseDribble;

const Right = styled.div``;

const Imgs = styled.img`
  width: 630px;
`;

const Container = styled.div`
  padding: 50px 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div`
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 50px;
  color: #0d0c22;
  font-weight: 500;
  width: 800px;
  text-align: center;
`;

const Holder = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  font-weight: 500;
  width: 38%;
`;

const InlineLeft = styled.div`
  margin: 50px 0;
`;

const Img = styled.img``;

const Txt = styled.div<{
  bg: string;
  w: string;
}>`
  background-color: ${({ bg }) => bg};
  width: ${({ w }) => w};
  padding: 2px;
  font-size: 20px;
  margin: 10px 0;
`;

const TinyTxt = styled.div`
  font-size: 17px;
`;
