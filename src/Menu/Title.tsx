import React, { Component } from "react";
import styled from "styled-components";

const Name = styled.h1`
  padding: 20px 20px 30px 14px;
  color: black;
  font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;
`;

class Title extends Component {
  render() {
    return (
      <div>
        <Name>Hester Arden</Name>
      </div>
    );
  }
}

export default Title;
