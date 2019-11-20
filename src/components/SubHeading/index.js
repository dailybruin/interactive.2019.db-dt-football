import React from "react";
import { css } from "emotion";
import { colors } from "../Shared/colors";
import { mobile } from "../Shared/mediaQueries";

export function SubHeading({ text, explainer, ID }) {
  return (
    <div
      className={css`
        margin-top: 2em;
        margin-bottom: 1.5em;
        ${mobile} {
          margin-top: 1em;
          margin-bottom: 1em;
        }
      `}
    >
      <div
        id={ID ? ID : ""}
        className={css`
          position: relative;
          bottom: 160px;
          ${mobile} {
            bottom: 120px;
          }
        `}
      />
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
          margin: 0;
          width: 100%;
          ${mobile} {
            font-size: 24px;
          }
        `}
      >
        {text != "Are you #GoBruins or #FightOn?" ? (
          text
        ) : (
          <div>
            Are you{" "}
            <span
              className={css`
                color: ${colors.blue};
              `}
            >
              #GoBruins
            </span>{" "}
            or{" "}
            <span
              className={css`
                color: ${colors.red};
              `}
            >
              #FightOn?
            </span>
          </div>
        )}
      </h1>
      {explainer && (
        <p
          className={css`
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            text-align: center;
            font-family: "Poppins", sans-serif;
            margin: 0;
            padding: 0px 20px;
            ${mobile} {
              margin-top: 10px;
              font-size: 12px;
            }
          `}
        >
          {explainer}
        </p>
      )}
    </div>
  );
}
