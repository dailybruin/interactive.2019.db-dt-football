import React from "react";
import { css } from "emotion";
import ArticleCard from "./ArticleCard";
import { mobile } from "../Shared/mediaQueries";

const Section = ({ content, schoolname }) => (
  <div
    className={css`
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
    `}
  >
    {content.map((article, i) => (
      <ArticleCard article={article} key={i} school={schoolname} />
    ))}
  </div>
);

export default Section;
