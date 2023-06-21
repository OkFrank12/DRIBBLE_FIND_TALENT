import React from "react";
import images from "../../Assets/logos.jpg";
import styled from "styled-components";

const Sponsors = () => {
  return (
    <div>
      <Container>
        <Main>
          <Text>
            We’ve helped some of the world’s best design-forward companies hire
            expert creatives
          </Text>
          <Holder>
            <Logos src={images} />
          </Holder>
        </Main>
      </Container>
    </div>
  );
};

export default Sponsors;

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px 0;
`;

const Main = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100%;
  font-size: 20px;
  font-weight: 500;
`;

const Text = styled.div`
margin-top: 40px;`;

const Holder = styled.div``;

const Logos = styled.img``;
