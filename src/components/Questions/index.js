import React from "react";
import { css } from "emotion";
import { colors } from "../Shared/colors";

var containerClass = css`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;
  border: 2px solid #f7cd6a;
  color: black;
  padding: 10px;
  text-align: center;
  height: 30vh;
  width: 70vw;
  z-index: 5;
  margin: auto;
`;

var buttonClass = css`
  display: inline-block;
  font-size: calc(2vmin + 5px);
  background-color: #f7cd6a;
  width: 10vw;
  border-radius: 5vw;
  padding: 1vh 0;
  color: white;
  cursor: pointer;
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

export class Questions extends React.Component {
  componentWillMount() {}

  constructor(props) {
    super(props);
    let arr = [
      {
        text: this.props.text[0].answer1,
        response_value: 1
      },
      {
        text: this.props.text[0].answer2,
        response_value: 0
      }
    ];
    shuffle(arr);
    this.state = {
      currentIndex: 0,
      hidden: false,
      answerArray: arr,
      responses: []
    };
    this.incCount = this.incCount.bind(this);
  }

  incCount(selected_response) {
    this.setState(() => {
      return { hidden: true };
    });

    setTimeout(() => {
      this.setState(ps => {
        let new_responses = ps.responses;
        console.log(new_responses);
        new_responses.push({
          question: this.props.text[ps.currentIndex].question,
          response_value: selected_response
        });
        let nextInd = ps.currentIndex + 1;
        let arr =
          nextInd < this.props.text.length
            ? [
                {
                  text: this.props.text[nextInd].answer1,
                  response_value: 1
                },
                {
                  text: this.props.text[nextInd].answer2,
                  response_value: 0
                }
              ]
            : [];

        shuffle(arr);

        console.log(new_responses);
        return {
          currentIndex: nextInd,
          hidden: false,
          answerArray: arr,
          responses: new_responses
        };
      });
    }, 300);
  }

  render() {
    return (
      <div className={containerClass}>
        <div
          className={
            this.state.hidden
              ? css`
                  opacity: 0;
                  transition: opacity 0.2s;
                `
              : css`
                  opacity: 1;
                  transition: opacity 0.2s;
                `
          }
        >
          {this.state.currentIndex < this.props.text.length && (
            <div>
              <h2
                className={css`
                  margin: 0;
                `}
              >
                {this.props.text[this.state.currentIndex].question}
              </h2>

              <div
                className={css`
                  display: flex;
                  justify-content: space-around;
                  width: 30vw;
                  margin-top: 5vh;
                `}
              >
                {this.state.answerArray.map(item => (
                  <div
                    className={buttonClass}
                    onClick={
                      this.state.hidden
                        ? () => {}
                        : () => this.incCount(item.response_value)
                    }
                  >
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          )}

          {this.state.currentIndex >= this.props.text.length && (
            <h2> Thank You! </h2>
          )}
        </div>
      </div>
    );
  }
}
