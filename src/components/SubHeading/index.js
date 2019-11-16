import React from "react";
import { css } from "emotion";
import { colors } from "../Shared/colors";
import { mobile } from "../Shared/mediaQueries";

export function SubHeading({ text, explainer }) {
  return (
    <div
      className={css`
        margin-bottom: 1.2em;
      `}
    >
      <h1
        className={css`
          font-size: 30px;
          color: black;
          font-weight: bold;
          font-family: "Poppins", sans-serif;
          font-style: normal;
          text-align: center;
          padding-top: 20px;
          padding-bottom: 0px;
          width: 100%;
          ${mobile} {
            margin: 5px;
            font-size: 18px;
          }
        `}
      >
        {text}
      </h1>
      {explainer && (
        <p
          className={css`
            font-style: normal;
            font-weight: bold;
            font-size: 15px;
            text-align: center;
            font-family: "Poppins", sans-serif;
            margin: 0;
            ${mobile} {
              font-size: 9px;
            }
          `}
        >
          {explainer}
        </p>
      )}
    </div>
  );
}
