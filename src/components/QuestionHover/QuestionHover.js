import React from "react";
import { css } from "emotion";
import { colors } from "../Shared/colors";
import Bar from "../Bar/Bar";
import { mobile } from "../Shared/mediaQueries";

class QuestionHover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }

  onMouseEnterHandler() {
    this.setState({
      hover: true
    });
  }
  onMouseLeaveHandler() {
    this.setState({
      hover: false
    });
  }

  render() {
    return (
      <div
        onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler}
        className={css`
          display: flex;
          justify-content: center;
        `}
      >
        <Bar
          numResponses={this.props.numResponses}
          numYes={this.props.numYes}
          isUCLA="true"
        />
        <div
          className={css`
            width: 60px !important;
            text-align: center;
            font-family: "Poppins", sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 28px;
            flex-shrink: 0;
            position: relative;
          `}
        >
          <div
            className={css`
              color: ${this.state.hover ? colors.yellow : "black"};
            `}
          >
            {this.props.question_num}
          </div>
          <div
            className={css`
              width: 300px;
              position: absolute;
              top: 35px;
              border-radius: 5px;
              border: 2px solid black;
              font-weight: normal;
              font-size: 18px;
              background: white;
              z-index: 4;
              pointer-events: none;
              display: ${this.state.hover === true ? "inline-block" : "none"};
            `}
          >
            {this.props.question}
          </div>
        </div>
        <Bar
          numResponses={this.props.numResponses}
          numYes={this.props.numResponses - this.props.numYes}
          isUCLA="false"
        />
      </div>
    );
  }
}
export default QuestionHover;
