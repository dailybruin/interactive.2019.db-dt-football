import React from "react";
import { Bar } from "../Bar";
import { css } from "emotion";
import QuestionHover from "../QuestionHover/QuestionHover";
import { mobile } from "../Shared/mediaQueries";

export class BarGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num_responses: -1,
      responses: null,
      question_num: 0
    };
  }

  componentDidMount() {
    fetch(
      "http://db-dt-football-backend.db-dt-football-backend.primary.dailybruin.com:14657/getstatistics"
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          num_responses: data.num_responses,
          responses: data.stats
        })
      );
  }

  render() {
    if (!this.state.responses) return null;
    const responsesArray = Object.values(this.state.responses);
    const numResponsesArray = Object.values(this.state.num_responses);
    let total_LA = 0;
    let total_SC = 0;
    for (var i = 0; i < responsesArray.length; i++) {
      total_LA = total_LA + parseInt(responsesArray[i], 10);
      total_SC =
        total_SC + (numResponsesArray[i] - parseInt(responsesArray[i], 10));
    }
    const rows = responsesArray.map((LA, index) => (
      <div
        className={css`
          margin: 15px;
          justify-content: center;
        `}
      >
        {/* insert question into the prop of this thing */}
        <QuestionHover
          numYes={LA}
          numResponses={numResponsesArray[index]}
          question_num={index + 1}
          question={Object.keys(this.state.responses)[index]}
        />
      </div>
    ));
    return (
      <>
        <div
          className={css`
            width: 90%;
            margin: auto;
            display: flex;
            flex-direction: column;
          `}
        >
          <div
            className={css`
              display: flex;
              width: 100%;
            `}
          >
            <div
              className={css`
                font-family: "Poppins", sans-serif;
                font-style: normal;
                font-weight: bold;
                font-size: 28px;
                color: #83b8d7;
                margin-right: 30px;
                width: 50%;
              `}
            >
              <span
                className={css`
                  float: right;
                `}
              >
                UCLA
              </span>
            </div>
            <div
              className={css`
                font-family: "Poppins", sans-serif;
                font-style: normal;
                font-weight: bold;
                font-size: 28px;
                color: #cd6969;
                margin-left: 30px;
                width: 50%;
              `}
            >
              <span
                className={css`
                  float: left;
                `}
              >
                USC
              </span>
            </div>
          </div>
          <div
            className={css`
              justify-content: center;
            `}
          >
            {rows}
          </div>
          <div
            className={css`
              font-family: "Poppins", sans-serif;
              font-style: normal;
              font-weight: bold;
              font-size: 28px;
              width: 100%;
              text-align: center;
              margin-top: 20px;
              ${mobile} {
                font-size: 24px;
              }
            `}
          >
            Who wins?
          </div>
          <div
            className={css`
              display: flex;
              width: 100%;
            `}
          >
            <div
              className={css`
                font-family: "Poppins", sans-serif;
                font-style: normal;
                font-weight: bold;
                font-size: 28px;
                color: #83b8d7;
                margin-right: 10px;
                width: 50%;
              `}
            >
              <span
                className={css`
                  float: right;
                `}
              >
                UCLA
              </span>
            </div>
            <div
              className={css`
                font-family: "Poppins", sans-serif;
                font-style: normal;
                font-weight: bold;
                font-size: 28px;
                color: #cd6969;
                margin-left: 10px;
                width: 50%;
              `}
            >
              <span
                className={css`
                  float: left;
                `}
              >
                USC
              </span>
            </div>
          </div>
          <div
            className={css`
              display: flex;
              margin: 10px;
            `}
          >
            <Bar
              numResponses={total_LA + total_SC}
              numYes={total_LA}
              isUCLA="true"
            />
            <Bar
              numResponses={total_LA + total_SC}
              numYes={total_SC}
              isUCLA="false"
            />
          </div>
        </div>
      </>
    );
  }
}
