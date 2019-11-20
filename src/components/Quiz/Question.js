import React from "react";
import { css } from "emotion";
import { colors } from "../Shared/colors";

const Answer = ({ onClick, text }) => (
  <div
    onClick={() => onClick(text)}
    className={css`
      font-size: 20px;
      background-color: ${colors.yellow};
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

const Question = ({ onClick, question, answer1, answer2 }) => {
  return (
    <>
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
        `}
      >
        <Answer onClick={onClick} text={answer1} />
        <Answer onClick={onClick} text={answer2} />
      </div>
    </>
  );
};

export default Question;
