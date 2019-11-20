import React, { useState } from "react";
import { css } from "emotion";
import Question from "./Question";
import { setCookie } from "../../utils";

function post_func(url, information) {
  try {
    fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(information), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch {
    console.log("rip");
  }
}

const BRUIN = "Bruin";
const TROJAN = "Trojan";
const defaultQuestion = {
  question: "Trojan or Bruin?",
  answer1: TROJAN,
  answer2: BRUIN
};

const Box = ({ children }) => (
  <div
    className={css`
      text-align: center;
    `}
  >
    {children}
  </div>
);

const Questions = ({ list }) => {
  const [questions, setQuestions] = useState([defaultQuestion, ...list]);
  const currentQuestion = questions[0];

  if (!currentQuestion) {
    return (
      <Box>
        <h1>Done!</h1>
      </Box>
    );
  }

  function saveSchool(school) {
    setCookie("school", school);
    setQuestions(questions.length > 0 ? questions.slice(1) : null);
  }

  function changeQuestion(answer) {
    //logAnswer(currentQuestion, answer);
    setQuestions(questions.length > 0 ? questions.slice(1) : null);
  }

  let callback;
  if (currentQuestion.question == defaultQuestion.question) {
    callback = saveSchool;
  } else {
    callback = changeQuestion;
  }

  return (
    <Box>
      <Question onClick={callback} {...currentQuestion} />
    </Box>
  );
};

export default Questions;
