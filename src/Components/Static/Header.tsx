import React from "react";
import styled from "styled-components";
import bookPress from "../../Assets/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import Button from "./Button";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo src={bookPress} />
          <NavsHolder>
            <Navs>Home</Navs>
            <Navs>About</Navs>
            <Navs>Book Store</Navs>
            <Navs>Blog</Navs>
            <Navs>Contact</Navs>
            <Navs>More</Navs>
          </NavsHolder>
          <CallToAction>
            <Search />
            <Cart />
            <Button />
          </CallToAction>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: white;
`;

const Main = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 17px;
`;

const Logo = styled.img`
  width: 200px;
`;

const NavsHolder = styled.div`
  display: flex;
`;

const Navs = styled.div`
  margin: 0 20px;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

const CallToAction = styled.div`
  color: blue;
  font-size: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
`;

const Search = styled(AiOutlineSearch)``;

const Cart = styled(BsCart)``;
