import React from "react";
import { css } from "emotion";
import { colors } from "../Shared/colors";
import styled from "styled-components";
import { mobile } from "../Shared/mediaQueries";

const Article = styled("article")`
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
`;

const a = styled("a")`
  text-decoration: none;
  width: 100%;
`;

export default function ArticleCard({ article, school }) {
  return (
    <>
      {article && (
        <Article>
          <div
            className={css`
            height: 400px;
            background-image: url("${article.image}");
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
          `}
          />
          <div
            className={css`
              border-top: 5px solid black;
            `}
          >
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
          </div>
        </Article>
      )}
    </>
  );
}
