import React from "react";
import { css } from "emotion";
import { colors } from "../Shared/colors";
import { mobile } from "../Shared/mediaQueries";

const Answer = ({ onClick, text }) => (
  <div
    onClick={() => onClick(text)}
    className={css`
      font-size: 20px;
      background-color: ${colors.yellow};
      &:hover {
        filter: brightness(102.5%);
      }
      border-radius: 5vw;
      padding: 12px 60px;
      color: white;
      cursor: pointer;
      height: 100%;
      margin: 10px 2vw;
    `}
  >
    {text}
  </div>
);

const Question = ({
  onClick,
  question,
  answer1,
  answer2,
  doFadeOut,
  animLength
}) => {
  return (
    <div
      className={css`
        ${doFadeOut === true
          ? `opacity: 0; transition: opacity ${animLength}s;`
          : "opacity: 1;"}
        ${doFadeOut === false
          ? `opacity: 1; transition: opacity ${animLength}s;`
          : "opacity: 0;"}
      `}
    >
      <h2
        className={css`
          margin: 30px;
          margin-top: 10px;
        `}
      >
        {question}
      </h2>
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;

          ${mobile} {
            flex-direction: column;
          }
        `}
      >
        {Math.random() <= 0.5 ? (
          <>
            <Answer onClick={onClick} text={answer1} />
            <Answer onClick={onClick} text={answer2} />
          </>
        ) : (
          <>
            <Answer onClick={onClick} text={answer2} />
            <Answer onClick={onClick} text={answer1} />
          </>
        )}
      </div>
    </div>
  );
};

export default Question;
