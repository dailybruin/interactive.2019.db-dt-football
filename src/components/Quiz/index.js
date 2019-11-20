import React from "react";
import Questions from "./Questions";

const Quiz = ({ onQuizComplete, questions }) => (
  <>
    {questions && (
      <Questions onQuizComplete={onQuizComplete} list={questions} />
    )}
  </>
);

export default Quiz;
