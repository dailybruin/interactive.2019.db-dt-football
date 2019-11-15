import React from "react";
import { css } from "emotion";
import { colors } from "../Shared/colors";

export default function ArticleCard({ article }) {
  return (
    <article
      className={css`
        border: 15px solid ${colors.red};
        background-color: ${colors.red};
        padding: 3em;
      `}
    >
      <a
        href={article.link}
        className={css`
          color: ${colors.slate};
          text-decoration: none;
          width: 100%;
        `}
      >
        <h2 className="section-header">
          {article.italics ? <em>{article.header}</em> : article.header}
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
    </article>
  );
}
