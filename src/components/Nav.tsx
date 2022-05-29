import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ContainerNav = styled.nav`
  width: 20%;
  padding: 10px;
  background-color: rgba(255, 237, 246, 0.7);
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Li = styled.li`
  padding: 15px;
  
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  &:hover {
    border-bottom: solid 1px blue;
  }
`;

const Nav: React.FC = () => {
  return (
    <ContainerNav>
      <Ul>
        <Li>
          <LinkTo to="/">Home</LinkTo>
        </Li>
        <Li>
          <LinkTo to="/forms/task-1">Forms-Task-1</LinkTo>
        </Li>
        <Li>
          <LinkTo to="/forms/task-2">Forms-Task-2</LinkTo>
        </Li>
        <Li>
          <LinkTo to="/forms/task-3">Forms-Task-3</LinkTo>
        </Li>
      </Ul>
    </ContainerNav>
  );
};

export default Nav;
