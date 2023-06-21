import React from "react";
import styled from "styled-components";

const JobPanel = () => {
  // const [change, setChange] = React.useState<{}[]>([
  //   {
  //     block: "Job Board",
  //     big: "The #1 job board for top design talent",
  //     small:
  //       "Our job board postings receive an average of 1.1k targeted clicks per month and are viewed by over 1 million top designers globally. With a proven track record assisting over 60,000 companies, you’ll spend less time sorting through unqualified candidates and more time hiring amazing talent.",
  //     btn: "Visit the Job Board",
  //     src: "https://framerusercontent.com/modules/assets/anyiHSPP2um93testsvKwARCwiI~YnvWAnCLXVX5ggQK88HR6sJu5P-YNcaJrIQp_UB_uPs.mp4",
  //   },
  //   {
  //     block: "Designers Search",
  //     big: "Hire faster & smarter with Designer Search",
  //     small:
  //       "Easily find quality freelancers and full-time creatives using our powerful search engine with filters for specialty, location, experience level, and more. Search for available talent in the largest professional creative community with just a few clicks.",
  //     btn: "Start Your Search",
  //     src: "https://framerusercontent.com/modules/assets/WozDzrtXLXFW9li2N4rKlsztsKk~2oTwugE0NxCgiXJRLaeP9PlMaovqbNkY8O3XDRResCg.mp4",
  //   },
  // ]);
  return (
    <div>
      <Container>
        <Main>
          <Sections1>
            <LeftHolder>
              <Block>Job Board</Block>
              <BigText>The #1 job board for top design talent</BigText>
              <SmallText>
                Our job board postings receive an average of 1.1k targeted
                clicks per month and are viewed by over 1 million top designers
                globally. With a proven track record assisting over 60,000
                companies, you’ll spend less time sorting through unqualified
                candidates and more time hiring amazing talent.
              </SmallText>
              <Button>Visit the Job Board</Button>
            </LeftHolder>
            <RightHolder>
              <Video
                src="https://framerusercontent.com/modules/assets/anyiHSPP2um93testsvKwARCwiI~YnvWAnCLXVX5ggQK88HR6sJu5P-YNcaJrIQp_UB_uPs.mp4"
                controls
                autoPlay={true}
                loop
                playsInline
              />
            </RightHolder>
          </Sections1>
          <Sections1 style={{ display: "flex", flexDirection: "row-reverse" }}>
            <LeftHolder>
              <Block>Designers Search</Block>
              <BigText>Hire faster & smarter with Designer Search</BigText>
              <SmallText>
                Easily find quality freelancers and full-time creatives using
                our powerful search engine with filters for specialty, location,
                experience level, and more. Search for available talent in the
                largest professional creative community with just a few clicks.
              </SmallText>
              <Button>Start Your Search</Button>
            </LeftHolder>
            <RightHolder1>
              <Video
                src="https://framerusercontent.com/modules/assets/WozDzrtXLXFW9li2N4rKlsztsKk~2oTwugE0NxCgiXJRLaeP9PlMaovqbNkY8O3XDRResCg.mp4"
                controls
                autoPlay={true}
                loop
                playsInline
              />
            </RightHolder1>
          </Sections1>
        </Main>
      </Container>
    </div>
  );
};

export default JobPanel;

const Container = styled.div`
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
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const LeftHolder = styled.div`
  width: 45%;
  font-weight: 500;
  font-size: 20px;
`;

const RightHolder = styled.div`
  padding: 25px;
  width: 45%;
  height: 350px;
  background: rgb(252, 209, 189);
  background: linear-gradient(
    90deg,
    rgba(252, 209, 189, 1) 0%,
    rgba(252, 209, 189, 1) 39%,
    rgba(246, 216, 249, 1) 71%,
    rgba(246, 216, 249, 1) 99%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const RightHolder1 = styled.div`
  padding: 25px;
  width: 45%;
  height: 350px;
  background: rgb(252, 209, 189);
  background: rgb(236, 251, 248);
  background: linear-gradient(
    90deg,
    rgba(236, 251, 248, 1) 0%,
    rgba(236, 251, 248, 1) 39%,
    rgba(229, 252, 222, 1) 71%,
    rgba(229, 252, 222, 1) 99%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const Sections1 = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const Block = styled.div`
  background-color: #fcd0ba;
  padding: 10px;
  width: 170px;
  font-size: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Georgia, "Times New Roman", Times, serif;
  border-radius: 10px;
`;

const BigText = styled.div`
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 50px;
  color: #0d0c22;
  margin: 20px 0;
`;

const SmallText = styled.div``;

const Button = styled.div`
  padding: 15px;
  border-radius: 10px;
  color: white;
  font-size: 17px;
  transition: all 350ms;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 200px;
  margin: 20px 0;
  background-color: #100f22;

  :hover {
    background-color: #000;
  }
`;

const Video = styled.video`
  width: 95%;
  height: 95%;
`;
