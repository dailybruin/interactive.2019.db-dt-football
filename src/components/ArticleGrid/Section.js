import React from "react";
import { css } from "emotion";
import ArticleCard from "./ArticleCard";
import { colors } from "../Shared/colors";
import { mobile } from "../Shared/mediaQueries";
import styled from "styled-components";

const Header = styled("h2")`
  font-size: 4rem;
  color: ${props => {
    if (props.school == "USC") return colors.red;
    if (props.school == "UCLA") return colors.blue;
  }};
  text-transform: uppercase;
  margin-bottom: 0.4em;

  ${mobile} {
    font-size: ${props => {
      if (props.length > 10) return "3rem";
      return "4rem";
    }};
  }
`;

export class Section extends React.Component {
  constructor(props) {
    super(props);
    this.props = { schoolname: String };
  }
  render() {
    const articles = this.props.data.sections.map((article, i) => (
      <ArticleCard article={article} key={i} school={this.props.schoolname} />
    ));

    const gridStyles =
      this.props.data.sections.length > 1
        ? css`
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 20px;
            padding-left: 2em;
            padding-right: 2em;
            @media (max-width: 700px) {
              grid-template-columns: 1fr;
            }
          `
        : null;
    return (
      <div
        id={this.props.data.paper}
        className={css`
          text-align: center;
        `}
      >
        <Header
          school={this.props.schoolname}
          length={this.props.data.sections.length}
        >
          {this.props.data.paper}
        </Header>
        {this.props.data.blurb ? (
          <p
            className={css`
              color: ${colors.black};
              font-size: 1.2em;
            `}
          >
            {this.props.data.blurb}
          </p>
        ) : null}
        <div className={gridStyles}>{articles}</div>
      </div>
    );
  }
}
