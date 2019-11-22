const mongoose = require("mongoose");

const answerSchema = mongoose.Schema(
  {
    question: { type: String, required: [true, "can't be blank"] },
    answer: { type: String, required: [true, "can't be blank"] }
  },
  { strict: false }
);

const Answer = mongoose.model("Answer", answerSchema);

module.exports = Answer;
