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
          <a
            href={article.link}
            className={css`
              text-decoration: none;
              color: black;
              &:hover {
                box-shadow: 1px 1px 5px black;
              }
            `}
          >
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
                border-top: 10px solid ${colors.yellow};
                padding-bottom: 20px;
              `}
            >
              <h3
                className="headline"
                className={css`
                  padding: 0px 15px;
                `}
              >
                {article.italics ? (
                  <em>{article.headline}</em>
                ) : (
                  article.headline
                )}
              </h3>
              {article.author ? (
                <div
                  className={css`
                    text-transform: uppercase;
                    margin: 0px;
                  `}
                >
                  By {article.author}
                </div>
              ) : null}
            </div>
          </a>
        </Article>
      )}
    </>
  );
}
