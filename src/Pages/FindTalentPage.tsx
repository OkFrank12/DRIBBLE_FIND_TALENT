import React from "react";
import Hero from "./Talents/Hero";
import Sponsors from "./Talents/Sponsors";
import JobPanel from "./Talents/JobPanel";
import Feeds from "./Talents/Feeds";
import ChooseDribble from "./Talents/ChooseDribble";
import Creative from "./Talents/Creative";
import TalentFooter from "./Talents/TalentFooter";
import styled from "styled-components";

const FindTalentPage = () => {
  const [scroll, setScroll] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scroll = window.pageYOffset;
      if (scroll > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
      window.addEventListener("scroll", handleScroll);
    };
    window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      {scroll ? (
        <Top p="fixed">
          <Linker>Post a job opening</Linker>
          <Linker>Post a freelance project</Linker>
          <Linker>Search for designer</Linker>
        </Top>
      ) : (
        <Top p="">
          <Linker>Post a job opening</Linker>
          <Linker>Post a freelance project</Linker>
          <Linker>Search for designer</Linker>
        </Top>
      )}
      <Hero />
      <Sponsors />
      <JobPanel />
      <Feeds />
      <ChooseDribble />
      <Creative />
      <TalentFooter />
    </div>
  );
};

export default FindTalentPage;

const Top = styled.div<{
  p: string;
}>`
  width: 100%;
  height: 70px;
  background-color: #f6f4ee;
  display: flex;
  z-index: 10;
  align-items: center;
  position: sticky;
  top: 0;

  position: ${({ p }) => p};
`;

const Linker = styled.div`
  margin: 0px 20px;
  transition: all 350ms;
  font-weight: 500;
  :hover {
    text-decoration-line: underline;
    cursor: pointer;
  }
`;
