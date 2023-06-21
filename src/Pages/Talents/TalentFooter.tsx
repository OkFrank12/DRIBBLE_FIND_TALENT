import React from "react";
import styled from "styled-components";
import logo from "../../Assets/dribble.jpg";
import globe from "../../Assets/globe.jpg";
import instagram from "../../Assets/instagram.jpg";
import facebook from "../../Assets/facebook.jpg";
import twit from "../../Assets/twitter.jpg";
import pint from "../../Assets/pinterest.jpg";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const TalentFooter = () => {
  const props: any = [
    {
      imgs: globe,
    },
    {
      imgs: twit,
    },
    {
      imgs: facebook,
    },
    {
      imgs: instagram,
    },
    {
      imgs: pint,
    },
  ];
  const navsProps: any = [
    {
      head: "For designers",
      navs0: "Go Pro",
      navs1: "Explore design work",
      navs2: "Design blog",
      navs3: "Overtime Podcast",
      navs4: "Playoffs",
      navs5: "Code of conducts",
    },
    {
      head: "Hire designers",
      navs0: "Post a job opening",
      navs1: "Post a freelance project",
      navs2: "Search for designers",
      head2: "Branch",
      navs3: "Advertise with us",
    },
    {
      head: "Company",
      navs0: "About",
      navs1: "Careers",
      navs2: "Support",
      navs3: "Media kit",
      navs4: "Testimonials",
      navs5: "API",
      navs6: "Terms of service",
      navs7: "Privacy policy",
      navs8: "Cookie policy",
    },
    {
      head: "Directories",
      navs0: "Design jobs",
      navs1: "Designers for hire",
      navs2: "Freelance designers for hire",
      navs3: "Tags",
      navs4: "Places",
      head3: "Design assets",
      navs5: "Dribble Marketplace",
      navs6: "Creative Market",
      navs7: "Fontspring",
      navs8: "Font Squirrel",
    },
    {
      head: "Design Resources",
      navs0: "Freelancing",
      navs1: "Design Hiring",
      navs2: "Design Portforlio",
      navs3: "Design Education",
      navs4: "Creative Process",
      navs5: "Design Industry Trends",
    },
  ];
  return (
    <div>
      <Container>
        <Main>
          <Section>
            <Logo src={logo} />
            <Text>
              Dribbble is the world's leading community for creatives to share,
              grow, and get hired.{" "}
            </Text>
            <Socials>
              {props.map((el: any) => (
                <Img src={el.imgs} />
              ))}
            </Socials>
          </Section>
          <Hold>
            {navsProps.map((el: any) => (
              <Section1>
                <Head>{el.head}</Head>
                <Navs>{el.navs0}</Navs>
                <Navs>{el.navs1}</Navs>
                <Navs>{el.navs2}</Navs>
                <Head>{el.head2}</Head>
                <Navs>{el.navs3}</Navs>
                <Navs>{el.navs4}</Navs>
                <Head>{el.head3}</Head>
                <Navs>{el.navs5}</Navs>
                <Navs>{el.navs6}</Navs>
                <Navs>{el.navs7}</Navs>
                <Navs>{el.navs8}</Navs>
              </Section1>
            ))}
          </Hold>
        </Main>
        <Text1>
          <AiOutlineCopyrightCircle style={{marginRight: "5px"}}/>
          2023 Dribbble. All rights reserved.
        </Text1>
      </Container>
    </div>
  );
};

export default TalentFooter;

const Text1 = styled.div`
  display: flex;
  align-items: center;
  color: grey;
  width: 92%;
  margin-top: 20px;
`;

const Hold = styled.div`
  display: flex;
  height: 100%;
  width: 73%;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Main = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 15px;
  width: 92%;
  height: 90%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid silver;
`;

const Section = styled.div`
  height: 100%;
  width: 400px;
`;

const Section1 = styled.div`
  height: 100%;
  width: 300px;
`;

const Logo = styled.img``;

const Text = styled.div`
  margin: 10px 0;
  width: 80%;
`;

const Socials = styled.div`
  display: flex;
`;

const Img = styled.img`
  margin: 0 5px;
  width: 30px;
  height: 30px;

  :hover {
    cursor: pointer;
  }
`;

const Head = styled.div`
  font-weight: bold;
`;

const Navs = styled.div`
  margin: 20px 0;
  width: 100%;

  :hover {
    text-decoration-line: underline;
    cursor: pointer;
  }
`;
