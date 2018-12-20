import React, { Component } from "react";
import styled from "styled-components";

export interface IMenuLinks {
  links: string[];
}

const LinksWrapper = styled.ul`
-webkit-padding-start: 0;
  list-style-type: none;
`;

const Links = styled.li`
  font-size: 14px;
  color: black;
  font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;
  line-height: 1.5;
  margin-bottom: 3px;
  &:hover {
    color: grey;
    cursor: pointer;
    font-style: italic;
  }
`;

class MenuLinks extends Component<IMenuLinks> {
  render() {
    const { links } = this.props;
    return (
      <LinksWrapper>
        {links.map(link => (
          <Links>{link}</Links>
        ))}
      </LinksWrapper>
    );
  }
}

export default MenuLinks;
