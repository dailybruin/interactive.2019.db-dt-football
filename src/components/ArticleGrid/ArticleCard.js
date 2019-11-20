import React from "react";
import { css } from "emotion";
import { colors } from "../Shared/colors";
import styled from "styled-components";
import { mobile } from "../Shared/mediaQueries";

const Article = styled("article")`
  /* border: ${props => {
    if (props.school == "USC") return "50px solid " + colors.red;
    if (props.school == "UCLA") return "50px solid " + colors.blue;
  }}; */
  background-color: white;
  color: black;
  padding: 3em;
  ${mobile} {
    padding: 2em 1em;
  }
`;

const a = styled("a")`
  text-decoration: none;
  width: 100%;
`;

export default function ArticleCard({ article, school }) {
  return (
    <>
      {article && (
        <Article school={school}>
          <a
            href={article.link}
            className={css`
              color: black;
              text-decoration: none;
              width: 100%;
            `}
          >
            <h2 className="section-header">
              {article.italics ? <em>{article.section}</em> : article.section}
            </h2>
            <img
              src={article.image}
              className={css`
                object-fit: cover;
                width: 100%;
                height: 250px;
              `}
            />
            <h3 className="headline">
              {article.italics ? <em>{article.headline}</em> : article.headline}
            </h3>
            {article.author ? (
              <div
                className={css`
                  text-transform: uppercase;
                `}
              >
                By {article.author}
              </div>
            ) : null}
          </a>
        </Article>
      )}
    </>
  );
}
