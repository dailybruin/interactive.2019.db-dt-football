import React from "react";
import { css } from "emotion";
import Section from "./Section";
import { mobile } from "../Shared/mediaQueries";
import { colors } from "../Shared/colors";

const ArticleGrid = ({ papers }) => (
  <div
    className={css`
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 2fr);
      grid-gap: 20px;
      text-align: center;
      ${mobile} {
        padding: 0em;
        display: flex;
        flex-direction: column;
      }
      padding-top: 0.5em;
      padding: 0px 10%;
    `}
  >
    {papers &&
      papers.map((paper, index) => (
        <div
          className={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <h1
            className={css`
              color: ${index == 0 ? colors.blue : colors.red};
              font-size: 3em;
            `}
          >
            {index == 0 ? "Daily Bruin" : "Daily Trojan"}
          </h1>
          <div
            className={css`
              padding: 20px;
              background-color: ${index == 0 ? colors.blue : colors.red};
            `}
          >
            {paper.sections.map(section => (
              <Section
                name={section.section}
                content={section.content}
                schoolname={index == 0 ? "UCLA" : "USC"}
              />
            ))}
          </div>
        </div>
      ))}
  </div>
);

export default ArticleGrid;
