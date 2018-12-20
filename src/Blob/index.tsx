import React, { Component } from "react";
import { blob } from "../Content";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 300px;
  background-color: white;
`;
const Content = styled.p`
  color: black;
`;

class Blob extends Component {
  render() {
    return (
      <Wrapper>
        <Content>{blob.mainBlob}</Content>
      </Wrapper>
    );
  }
}

export default Blob;
