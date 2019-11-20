import React from "react";
import { css } from "emotion";
import ArticleCard from "./ArticleCard";
import { colors } from "../Shared/colors";
import { mobile } from "../Shared/mediaQueries";
import styled from "styled-components";
import { slugify } from "../Shared/utils";

const Header = styled("h2")`
  font-size: 3rem;
  color: white;
  /* text-transform: uppercase; */
  margin-bottom: 0.4em;

  ${mobile} {
    font-size: 2rem;
  }
`;

export class Section extends React.Component {
  constructor(props) {
    super(props);
    this.props = { schoolname: String };
  }
  render() {
    const articles = this.props.content.map((article, i) => {
      return (
        <ArticleCard article={article} key={i} school={this.props.schoolname} />
      );
    });

    const gridStyles = this.props.content
      ? css`
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          grid-gap: 20px;
          padding: 0 2rem;
          ${mobile} {
            padding: 0 1rem;
          }
          @media (max-width: 700px) {
            grid-template-columns: 1fr;
          }
        `
      : null;

    return (
      <div
        className={css`
          text-align: center;
        `}
      >
        <div
          id={`${slugify(
            (this.props.schoolname == "USC" ? "daily trojan" : "daily bruin") +
              " " +
              this.props.name
          )}`}
          className={css`
            position: relative;
            bottom: 200px;
          `}
        />
        <Header
          school={this.props.schoolname}
          length={this.props.content.length}
        >
          {this.props.name}
        </Header>
        <div className={gridStyles}>{articles}</div>
      </div>
    );
  }
}
