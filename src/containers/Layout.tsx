import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import "../reset.css";


const Container = styled.div`
  width: 100%;
  min-height: 85vh;
  padding: 30px;
  background-color: rgba(222, 222, 255, 0.8);
  display: flex;
`;

const Content = styled.main`
  width: 80%;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <Nav />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
