import React, { useState } from "react";
import { css } from "emotion";
import Question from "./Question";
import { colors } from "../Shared/colors";
import { mobile } from "../Shared/mediaQueries";
import { config } from "../../config";

function logAnswer(body) {
  try {
    fetch(config.backendURL, {
      method: "POST",
      body: JSON.stringify(body), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch {
    console.log("rip");
  }
}

const Box = ({ children }) => (
  <div
    className={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      background-color: white;
      border: 2px solid ${colors.yellow};
      height: auto;
      width: 70%;
      ${mobile} {
        width: 85%;
        padding: 10px;
      }
      z-index: 5;
      margin: auto;
      padding: 30px 30px;
    `}
  >
    {children}
  </div>
);

const Questions = ({ onQuizComplete, list }) => {
  const [questions, setQuestions] = useState(list);
  const currentQuestion = questions[0];

  if (!currentQuestion) {
    onQuizComplete();
    return null;
  }

  function skipQuiz() {
    setQuestions(null);
  }

  function changeQuestion(answer) {
    logAnswer({
      question: currentQuestion.question,
      answer: answer == currentQuestion.answer1 ? "ucla" : "usc"
    });
    setQuestions(questions.length > 0 ? questions.slice(1) : null);
  }

  return (
    <Box>
      <Question onClick={changeQuestion} {...currentQuestion} />
    </Box>
  );
};

export default Questions;
