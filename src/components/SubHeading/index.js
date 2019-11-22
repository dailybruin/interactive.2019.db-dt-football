import React from "react";
import { css } from "emotion";
import { colors } from "../Shared/colors";
import { mobile } from "../Shared/mediaQueries";

export function SubHeading({ text, explainer, ID }) {
  return (
    <div
      className={css`
        text-align: center;
        margin-bottom: 2em;
        ${mobile} {
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
            bottom: 80px;
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
          padding-top: 80px;
          padding-bottom: 0px;
          margin: 0;
          width: 100%;
          ${mobile} {
            padding-top: 40px;
            font-size: 24px;
          }
        `}
      >
        <div
          className={css`
            padding-bottom: 0.5em;
          `}
        >
          {" "}
          {text != "Are you #GoBruins or #FightOn?" ? (
            text
          ) : (
            <>
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
            </>
          )}
        </div>
      </h1>
      {explainer &&
        (Array.isArray(explainer) ? (
          explainer.map((x, i) => (
            <p
              className={css`
                font-style: normal;
                font-size: 20px;
                ${i === 1 ? "font-weight: bold;" : "font-weight: normal;"}
                text-align: center;
                font-family: "Poppins", sans-serif;
                width: 70%;
                padding: 0px 20px 15px 20px;
                margin: auto;

                ${mobile} {
                  margin-top: 10px;
                  font-size: 12px;
                  width: 95%;
                }
              `}
            >
              {x}
            </p>
          ))
        ) : (
          <p
            className={css`
              font-style: normal;
              font-size: 20px;
              text-align: center;
              font-family: "Poppins", sans-serif;
              width: 70%;
              padding: 0px 20px 15px 20px;
              margin: auto;

              ${mobile} {
                margin-top: 10px;
                font-size: 12px;
                width: 95%;
              }
            `}
          >
            {explainer}
          </p>
        ))}
    </div>
  );
}
