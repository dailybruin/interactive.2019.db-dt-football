import React from "react";
import Questions from "./Questions";
import { SubHeading } from "../SubHeading";

const Quiz = ({ questions }) => (
  <>
    <SubHeading
      text="Are you #GoBruins or #FightOn?"
      explainer="Answer these poll questions to see how others did as well."
      ID="poll"
    />
    {questions && <Questions list={questions} />}
  </>
);

export default Quiz;
