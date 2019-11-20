import React, { useState } from "react";
import { css } from "emotion";
import { colors } from "../Shared/colors";
import { mobile } from "../Shared/mediaQueries";
import { BarGraph } from "../BarGraph";
import { SubHeading } from "../SubHeading";
import Question from "./Question";
import { setCookie } from "../../utils";

var containerClass = css`
  display: flex;
  justify-content: center;

  background-color: white;
  border: 2px solid #f7cd6a;
  color: black;
  height: auto;
  width: 70%;
  ${mobile} {
    width: 85%;
    padding: 10px;
  }
  z-index: 5;
  margin: auto;
  padding: 30px 30px;
`;

var buttonClass = css`
  display: inline-block;
  vertical-align: middle;
  align-items: center;
  font-size: 20px;
  background-color: ${colors.yellow};
  border-radius: 5vw;
  padding: 12px 60px;
  color: white;
  cursor: pointer;
  height: 100%;
  margin: 10px 2vw;
  &:hover {
    background-color: #fcd579;
    transition: background-color 0.1s;
  }
`;

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

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

// export class Questions extends React.Component {
//   componentWillMount() { }

//   constructor(props) {
//     // props: {
//     //   questions {
//     //     question
//     //     answer1 (UCLA)
//     //     answer2 (USC)
//     //   }[]
//     // }
//     super(props);
//     let arr = [
//       {
//         text: this.props.questions[0].answer1,
//         response_value: 1
//       },
//       {
//         text: this.props.questions[0].answer2,
//         response_value: 0
//       }
//     ];
//     shuffle(arr);
//     this.state = {
//       currentIndex: 0,
//       hidden: false,
//       answerArray: arr,
//       responses: []
//     };
//     this.incCount = this.incCount.bind(this);
//   }

//   incCount(selected_response) {
//     this.setState(() => {
//       return { hidden: true };
//     });

//     setTimeout(() => {
//       this.setState(ps => {
//         const { questions } = this.props;
//         let new_responses = ps.responses;
//         new_responses.push({
//           question: questions[ps.currentIndex].question,
//           response_value: selected_response
//         });
//         let nextInd = ps.currentIndex + 1;
//         let arr =
//           nextInd < questions.length
//             ? [
//               {
//                 text: questions[nextInd].answer1,
//                 response_value: 1
//               },
//               {
//                 text: questions[nextInd].answer2,
//                 response_value: 0
//               }
//             ]
//             : [];

//         if (nextInd >= questions.length) {
//           let post_body = {
//             response: new_responses
//           };
//           post_func(
//             "http://db-dt-football-backend.db-dt-football-backend.primary.dailybruin.com:14657/saveresponse",
//             post_body
//           );
//         }

//         shuffle(arr);

//         return {
//           currentIndex: nextInd,
//           hidden: false,
//           answerArray: arr,
//           responses: new_responses
//         };
//       });
//     }, 300);
//   }

//   render() {
//     return (
//       <>
//         <div className={containerClass}>
//           <div
//             className={
//               this.state.hidden
//                 ? css`
//                     opacity: 0;
//                     transition: opacity 0.2s;
//                   `
//                 : css`
//                     opacity: 1;
//                     transition: opacity 0.2s;
//                   `
//             }
//           >
//             {this.state.currentIndex < this.props.questions.length && (
//               <div>
//                 <h2
//                   className={css`
//                     margin: 30px;
//                     margin-top: 10px;
//                     text-align: center;
//                   `}
//                 >
//                   {this.props.questions[this.state.currentIndex].question}
//                 </h2>
//                 <div
//                   className={css`
//                     display: flex;
//                     justify-content: center;
//                     text-align: center;
//                     align-items: center;
//                     ${mobile} {
//                       flex-direction: column;
//                     }
//                   `}
//                 >
//                   {this.state.answerArray.map(item => (
//                     <div
//                       className={buttonClass}
//                       onClick={
//                         this.state.hidden
//                           ? () => { }
//                           : () => this.incCount(item.response_value)
//                       }
//                     >
//                       {item.text}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {this.state.currentIndex >= this.props.questions.length && (
//               <h2> Thank you! See how other people responded below. </h2>
//             )}
//           </div>
//         </div>
//         {this.state.currentIndex >= this.props.questions.length && (
//           <div
//             className={css`
//               margin: 50px 30px;
//             `}
//           >
//             <SubHeading
//               text="Results:"
//               explainer="Tap a bar to see the question."
//             />
//             <BarGraph />
//           </div>
//         )}
//       </>
//     );
//   }
// }
