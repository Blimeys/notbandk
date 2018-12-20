import React, { Component } from "react";
import styled from "styled-components";
import Title from "./Title";
import MenuLinks from "./MenuLinks";


const links = ["Showreel", "Theatre", "Gallery", "Contact"];

const Wrapper = styled.div`
  background-color: white;
  width: 250px;
`;

class Container extends Component {
  render() {
    return (
      <Wrapper>
        <Title />
        <MenuLinks links={links} />
      </Wrapper>
    );
  }
}

export default Container;
